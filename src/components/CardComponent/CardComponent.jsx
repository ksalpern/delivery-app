import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CardComponent() {
  const cards = {
    productComponent: {
        card : [
          {  id: 1, photo: 'https://lh3.googleusercontent.com/-xkD9IaAPg629GAYcY37lUSIJKnDh5zRjez8dwJagHmzFsdvo6cRQdTlgswAEIRxEWu226rPM0SIx9d5hNX-tH8j437rKAjZ8jTK0HOB8v9CdRTWL-zhcgMbfkw5WcpYMdXhxF2-_hvagVeU2HV2dQr0W9K4ksITe1F-sYDicREV_GwP4v1kksqlzffI-JsHfXs282RkOKZuyAOkgdq8ORW0nD1bjqlOAee9eTbPHYPFCkvvgLz1PSGilgr9Rm0wW1Hp6llNvMm6xo8NHLZLSLfApb4LbykK0mfgJt0R43vTKgITfHhL7i6Ab2_UzpA7QzlIPDbdHQrog4hTTWSjWfYfogdySPEYY0gZJKtYoll6_rVbdeI35HxK1DaLUAWSKoMSBYmsimugq76yXNISvKaC_gYT25fwJg8S6lsNqxEgZCyWExwjCqQ6y9jwkhmAC1b1Cb4tesJrI3s7TBLYcOhzbmMb_liQQEmBXdAVLbiRnjHsmF4d88Awn2oFGBvBhihxi1QSYRtnIkMv0ETYurM8a11b7e3IKOw5MgANWjlqlN1WfPye09DQK_7iOWHE5hdrNYHl9pBclGQNYiKWnAHAUeL1LwM4iorKDoZCCScfD5cYo5i1oAHjneebh0gmxC2ZyiU-r4w4JuCGCA6-88ycFz9SklmBTFgkVNcmxN5IC7xtHu4rv3kF5PcCTyKM7IntruPdsLDmm7Zyg0oZ6vIC4ib-43zWEumK3odhSwNTTg88oXSjiwXw3AY=w568-h757-no?authuser=0', price: '$75', name: 'Minidress' },
          {  id: 2, photo: 'https://lh3.googleusercontent.com/ExpIfhkrzIbx2gRPvPZ4k6JZQWbQDjL4EsKzF9zY4S_4QFPwJpZaAmf01RsSIF5DGMeOZKuA6FQcBe4tpPthI8Nnq1FPEmWFw5BOx6ETORAKhPZfCcMY0K5KG0Mk_qh3LJsjhTcFJKKDKKROHHNF9XEAjbhTQw4THuYOsVaTs5dgGiSOWUgkCG0_lOH_px2kXvE3JXrI14zr83O9yo9qqglsIfrjEn6_4928uxXP0BN7uI8dfP6jru6mudCwP7E6xFK5hHmjdiY-2OR4KKeGrV6fTwZIA-QUczbnXklbCM_BdV_u8mh9iJel-8kfbLiGlrySpZg2sON2Vw5dbUT52OXfTHrb7ZBHcbpayuoqF0Bv20yy1nUwkIoZvk33uaWZEtgRtdjPMtcEqkVmUtEclsw_OAx5u1gQ5rNQLWxE4cFE5uZL0nY5ctt39XignFxxbJRtcYVGl5oN6KNVcyZLoldK_J0S5MleGwVtBNvgB9trtGw4KPh-1-30eUjo1t1mQHa79MApUS23U5cm6EG-_qNePAvGHy624CtOJWN2_pUKY25iQRy4Me6Wr8uiS0_tL6Vap2p4bL6AMa7708zPqFNk0EF10ZrGjyUQhDqK0pX_sa4n6Tl7MMku1hq9qsED8XdektT4Sd40kdO5EpZC5GXp1JpTRjaN7-66Gzp712QeCuLlqumxUBWbtdPynxuLMjG-hgdeg9ATzkAhNjbceR9oYwJOP10cWWZwLzG41owWAyUtAj3lKKyFsp8=w568-h757-no?authuser=0', price: '$75', name: 'Minidress' },
          {  id: 3, photo: 'https://lh3.googleusercontent.com/1M3rvSdRrhm8t-pZX7PqzdjqDsGdHFTYTx3Z1x_ovZePNrSrLzuyLzlgUKE9u7JoWpmcO-imty2qOe9dR4hcKE4Vbc1A9JNgmnzRoYFhPIHM8eVv-Gb2IEHktKxOX6JcX9wXdgIWjpfGNiDk_y_RgBF3wKwTwU-xzS7HX_RTRBqbDb1RPp4XnvMgARmit2m_0qIJZaDlxRdCbDptvZnnFfYY5jlL69nkNvQITS-5CjQfbSwFL-UBdB1VnExyQ6tPvVRezIhsOi6hTw7COnUJmdB8GGb962lE-vW5x8C3p3Q707aM4G-6oYPUC4EV0dEdrpwfDBfNwQBbtgPMiOqc1CSj5IF4JZ4B4-JxP3FmvuVGMT-yobD_ii_q-_pJQ31Pi1tTL6l2iOXQO_aTSIjVBdKdzQA7c4JX16OhKfaIsWK_JdT2cwX7wELWM9L0sHJdHUzMCSN656ZoXW1ci1e9Y5w8rsbKTvRw8YRjmBs4ZrTQZpYJAd_mEyyYFCWTsarnJzNL3_aNFjMVh6KsvAfxmaaMfXcsiih3eEamxD2oAMUJh3U2eiQZbRac1dqPf489CglRU2QuR1_44U9fAZp5bxtJxfXJhQSsSfbSBnw6bebC2yQmbYrKLAPhAVGdAqjsNjz4wWRfer0yqtg2mhGKAQ5p33SqGRH0Q-quMl-CIGjkiG-LddDOj1qumauWTP5zoXorv5TwklHgIptpUCj0GKTkBSj07-Cz43fql0D7soJka7xsH3is-fqxbOo=w568-h757-no?authuser=0', price: '$75', name: 'Minidress' },
          {  id: 4, photo: 'https://lh3.googleusercontent.com/nTpbFqw05gXjIp_xYPElieuxlHWb3XZ6YAEviuq51nxE5UStWVyu-BKdZ_jIvZVdQrB3cUg_EP3oCHz3pZnFyGGNvT8goEh3nORCF_3mJgor5p6qiB8uYlTO4vYVLf4eqBTKS2SshjKwK9BFaaudy39IiAmRtoB5SkMJSkB1qGftlsuuT_zGCP0P_kRrWYMqK_7CMePwi8_DST23duKZ4JsOAYqLWa0AO27T32i_DHO2t1dltqMkXzXWS7Dh5_vo5aLvYmsBFT9_GlrdFiTp5VzVEohEYg5BR90_XtPheGu7i452G8MHJxSOyY53h3yPGUQMRs8pproGgp4EE2mSUCSWUyIIUjpTjr-M_evNabOw1ZKGILmsekshLDgvCt8zeWNHhCP1J3KM29GlnsjippV0w_UZqxIms4tN4UlTHW_qg4pcRf_7Pb7BqrEQHS9_G4eRPyhU-FZ-rIyj0LO_2Jw907kevhgwHHhhprYIRCTN9kIbDbM7j6XdVPZ2ApND98rzOvHGTYCySFS5_QmP079uhodktJmeUCMqp1dBn_Fo3fK-4_Zh140X8vKtwQNHjRpndo-A60eo4HJccuSNjjhexWaHN_L3nL_zg8lXIT1F-YDeMS-MVtiOKSyDMknSCXjN3D7TJUgn_FkbTWoMGMKmwfXZD3m8UPyisxet29AJfXydvN8s3-1ROymUFVsXLPX4Z3aTKr_5aRHUI3ibfHC1j4CExlX2ByD7TI44Qs6UbokpzHpn6i5_5HY=w568-h757-no?authuser=0', price: '$75', name: 'Minidress' },
          {  id: 5, photo: 'https://lh3.googleusercontent.com/zeRFStoaPEp_cteSKXQJSP9tgAtxk88PPIzOXWVB-UJw07qvQ4x3nVSHJJAJPUNQa4I3G4rKzBEJp7FWVwHx1vdBseMYK6mz46zuQGGCFouUqKlBFi4mMOei5SaoIX1lRZHSAeIiuzt9JI-sPtsnVdnXb4zz40cPXEN7umH6tz5Qgixumb0pSG3NsPFQKtjIYN6uwJ3UH78-U5MhM2n4sqZM1uxM9yzflES6xi5iPiJAdbYxnQUU8muY_eZSeLjEabViga2rIVgfdnHh8iksvLGtmdPLs8-h7HC1Ufoun5EJAK3avIu_xVqFMXcB5UOLox_ZIA9QYS7wOpfdE4Vc0EyKJM0WktRc2AqPg5vgGS1A114ofrnwE6pXW7bnjRoCb-pUa10br9B1XiEv_W1ycBTNEhIfVaQqDQsnthEu0LkVBc6sVS_tX9-H-wF--embxpEz0Za2tG9fsFuHYrO6gze7trofP9Ae_0EXvOvqoQo-lPGIkpgEt3kR4gnZhRQeHOlkoMK6isgW18Ru8uK_W31iDt8Tane4NePw5rq9f7cgglUpg3Ru4JEm93Wybc6pl1WE9ok1sB1EQFzfYlht2CwZdXUIr77G1T_lvpLKJbPFTmtPC36CwbX3HN0KHYICDk4QygwyxGveO5ihRuULveiCOhD4gWsQNXNHzg4iTB4qvusxXH5xjWXDT8Ng__yRZhQQKCMctn3tlQ6PWjgsxIuyGrJ_Ntj5fXE3RSH2peyS2AZJpJhevptAaqk=w568-h757-no?authuser=0', price: '$75', name: 'Minidress' },
          {  id: 6, photo: 'https://lh3.googleusercontent.com/DnX20F8yJCLi8l8icqUaUuwtILEwnLs1yUKYLS3qHnAsBcM1ezDduWRAFjaTLz95Hp6ocQwqE_hYruzAYbcXNNPYgQ__gb1ndznz8VNO5LkitD-TMMkx59N2ANKR-44w9EwF7VTgUCka8VWBwy4Denl9Yi6R--SlbBDroS3RJybnQXkYVsg12dONtSSqopxkBcm2l52FtBh_82ZrT6NSgzgdd4PvnbUCWRCelV5R1g6VSZIlXxLx77OF1LORfl6xRFuay59N0O8IG-LadTqrIB_1BtFpNdY34qAe5Yw9GTh9DG5kN4hFjBiAGGE9OdxWLIBnz38qmFFVXTLDryG-D-cPaVyWnvl23nlL3LQ_X_E4tKwZwvEKyFG1u0TV7QJNJVu1VC4dKB4uuyXLp2SIHCI4H3vsXNwYOF4D2lAU04mBnWfK10hhtway8y6jh3ARBxt6E64-2JI-3kSZ9nDz8WBwtW8nt3hUqCADcpjnP9yNV9goYg27yR3t8WuYup60eB44NpvYQrV7uiJYtY2quw6qbNQTwfAadyP3DPl39eaGa7TjkLt132ba_hn1B07WNG85ApfBCaTtKOfCc9zRMQvIrg-qLt8iw29A52AxhHspMDB0VGGwWziKrrvqXehjmdtwrOHxuwzd8Pztnyp4IIdUPQ331I9H_4lC6Kga0B7rGbGllNJ7DNxXtjBct19N1AzrOjn5vo06ndk2DWHexVcbqxou73FP146da8DYaJKnLaRIgQ2oYJEfuqM=w568-h757-no?authuser=0', price: '$75', name: 'Minidress' },
        ]
    }
}
let productElements =
cards.productComponent.card.map(c => 
  <Card style={{ width: '346px', marginBottom: '30px' }}>
  <Card.Img variant="top" src={c.photo} />
  <Card.Body>
    <Card.Title>{c.name}</Card.Title>
    <Card.Text>
     {c.price}
    </Card.Text>
    <Button variant="dark">Buy now</Button>
  </Card.Body>
  </Card>
  )

  return (
  <div style={{  display: 'flex', flexWrap:'wrap', justifyContent: 'space-between', padding: '100px', margin: '0 auto'}}>
  { productElements }
  </div>
  )
}

export default CardComponent