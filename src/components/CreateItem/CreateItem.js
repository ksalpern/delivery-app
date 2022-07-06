import React, { useState } from 'react';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { Button } from 'react-bootstrap';
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdAttachMoney,
} from 'react-icons/md';

import { shops } from '../api/store';
import Loader from '../Loader';
import { storage } from '../../firebase.config';
import { saveItem } from '../../utils/firebaseFunctions';



function CreateItem() {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [shop, setShop] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState('danger');
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState(null);


  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress =
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, (error) => {
      console.log(error);
      setFields(true);
      setMsg("Error while uploading : Try again 🙇");
      setAlertStatus("danger");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImageAsset(downloadURL);
        setIsLoading(false);
        setFields(true);
        setMsg("Image uploaded to successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      });
    }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef)
      .then(() => {
        setImageAsset(null);
        setIsLoading(false);
        setFields(true);
        setMsg("Image deleted  successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
        setFields(true);
        setMsg("Error while deleting : Try again 🙇");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      });
  };

  const saveDetails = () => {
    setIsLoading(true);
    try {
      if ((!title && !price && !imageAsset, !shop)) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          shop: shop,
          qty: 1,
          price: price,
        };

        saveItem(data);

        setIsLoading(false);
        setFields(true);
        setMsg("Data uploaded successfully 😊");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);

        clearData();
      }
    } catch (error) {
      console.log(error);
    }
  };


  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setPrice("");
    setShop("Select Shop");
  };

  return (
    <div style={{ padding: '100px', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {
          fields && (
            <p style={{ 'background-color': 'red' }}>
              Something is wrong
            </p>
          )}

        {/* Title input */}
        <div style={{ margin: '0 auto' }}>
          <MdFastfood />
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give me a title..."
          />
        </div>
        {/* SELECT SHOP */}
        <div>
          <select
            onChange={(e) => setShop(e.target.value)}
          >
            <option value="other" >
              Select Shop
            </option>
            {shops.map((shop) => (
              <option
                key={shop.id}
                value={shop.urlParamName}
              >
                {shop.name}
              </option>
            ))}
          </select>
        </div>
        {/* UPLOAD Product Photo */}
        <div>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageAsset ? (
                <label>
                  <div>
                    <MdCloudUpload />
                    <p>
                      Click here to upload
                    </p>
                  </div>
                  <input
                    type="file"
                    name="upload-image"
                    accept="image/*"
                    onChange={uploadImage}
                  />
                </label>
              ) : (
                <div style={{ width: '200px' }}>
                  <img
                    style={{ 'max-width': '100%' }}
                    src={imageAsset}
                    alt=""
                  />
                  <button
                    type="button"
                    onClick={deleteImage}
                  >
                    <MdDelete />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* ADD PRICE INPUT */}
        <div>
          <div>
            <MdAttachMoney />
            <input
              type="text"
              required
              placeholder="Add the price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        {/* SAVE BUTTON */}
        <div>
          <Button
            variant="dark"
            onClick={saveDetails}>
            Save
          </Button>
        </div>

      </div>
    </div>
  )
}

export default CreateItem;
