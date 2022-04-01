import React from "react";
import { Row, Col, Card, CardGroup, Button } from 'react-bootstrap';

//Image URL: https://drive.google.com/uc?id=<file.id>

function PhotoList() {
    const photoBank = [
        "15DOevtvEwRVgbZ2bULB30dFDdXdYG7Q2",
        "1JuqFdLbeL9BUT5Ky8hlYbERoZQJU649f",
        "1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        "1FVw1ejtFQwW6Do6VyvlWIlLvy4Gjd_0m",
        "1NA5U5wPQmA7AyJq3mPsEcsMiG9n-ZlGM",
        "1NSeUN1F-TxhTYIS4vyfJrJG11dYL3IUH",
        "1djYy4Cww9IO3ZBZA7ODh_WajfRICCHO6",
        "1jCxpRvaMQABoyu87DY8h-7VRVtjpmrDz",
        "1UUyVPm70qZL7K49fTW7K0OfYZ1yviyjf",
        "1Xg0zNXtNF7PQAcL6NaId9xghIA1N1KQM",
        "1ezkfE-TLoZwtejcuK1v3wSh4ueaEwvVx",
        "1_hYHmwvMqjY5IpWSBFfdv-ybfDwxU-_J",
        "1IJrtLtCEGbdDbCGkCpmBt4tXw9_EPZT3",
        "1sQOseMSO4KMFQkF5585InsBWauYpjpRG",
        "1H7Lq42uSwMWqXxQ5flYM9j8ncRVr_8-K",
        "1VPDNQRs7c95X608Z8fQGUOOLwURdSIL-",
        "1LcUrT3kPcRbLrlo1mU7zgJDhGxYZdV4f",
        "1ShXkiJZiUoueq0uMn11t5sK2u69t78Un",
        "19bnW0Rs_55oLY83Y3wYWt_FFC3boqTyR",
        "1rz9Mphnvuiy1CEV0op0sFQyBTvcCvRbY",
        "1lWoXissNK8UCpchKm6LD66V5Pid6iGeZ",
        "1tayVTEr73fW_QWR0mhFUNP214Tqac1K_",
        "1EgMxY3PZGgMEzxzgr7HAUG70l1fs00pS",
        "1GbsOVYvZQxfiQN-WHD7dh7svjTa7Jbfj",
        "1rqnL8KsKmaV8YM_qKLDtDADrYHi2Z5eE",
        "1qTd14AzwD6lLnig7BLZUd-FaR4mOudM-",
        "1L1HLrDHoHntkzDZuOlVa0obXIRtqzg7A",
        "1vwcD16Ot46wljw4S3m0b1zArbrnJOWZf",
        "1iCHBtUroGVp_Kv8YqPNbfaNRLbMiQhSZ",
        "1akX_VqTwY9r7Z9goOA078o8pOQyiNKXC",
        "1RcHGZi_O69zwyadnFmNNyllZ3gedo5Qk",
        "1OdAkfe7iTkh2aLG4P6CyPewVqZzhdY5I",
        "1xO1GgaLxvD1Ic8AQPdMJtxEs549KkhgH",
        "1iTn4fdCBSma9wRx4j62X4DSWjrXPv2GF",
        "15OTbmILUkf6yfMrfbJMpN_nuIOoqgG_e",
        "18bvdfJAuKGU5fQLQHtTRzP5KAFkJLz3k",
        "1pvxbEXnlWVUOgop_KQ-TM82tShoy12xT",
        "1DH1GXqeX6avpOsdtCAkk-MepZyy0Ky7M",
        "15EIzhYx8AnonPOp63SQtlwYz4GjbQ2dY",
        "1eO1avK5Z855MJWvBThF3jwLoxEEy6D0l",
        "1v3_SAbcYmzdVBlEReCgqwEzk2REoUupE",
        "1qn69MqMxYr0F9CrMbqbYV4hz5EFPbceX",
        "1l_QYU9lM2I4w5na-KweF5zl-Z5OHv45O",
        "1zfhxGSWNk6EB5091aHYTVJyAq9uksllU",
        "1eoCcrNr-82aZZUs_ohyRmNJLrN3Z1U_C",
        "1-34OELIhbnV9TGpmMLuIN7PIR5qyUoct",
        "10lMsgnJxOqAYnXxtrG8BYVK3KuD8TV1c",
        "1nZjMi-0SDg0-NL4mwZoCbQ_3ue96ki5I",
        "1XCy-EK42ghK9fhuBZ7BqohnwkFw6sAX-",
        "126YbNPf8A0HkIWU8VVup1H2bT_2Uz-Jj",
        "1E6ZXthVYNRngSCTK6p7I91_HAoT3UUEc",
        "16GCxUkDKaSFy9CLofDBQUxNPZeHTjkLZ",
        "17FSze0wqm3LdPIzv8uGCgdLkm8lqZbgc",
        "121qMVPV9RNizavYzxtbalhntOhXZ2hs7",
        "1WJ5GJoglhopJVWkCD9TB89RwzQY0Q-KQ",
        "1cdmt6S0N249wkgTkAcoUjh6BOIQHdatK",
        "1hxSnKnZ9Q7RiqZpNBIP7_vSzGua_ljc6",
        "11h933V8-lyFdfKqTpUt8FSUrnMkjN4JR",
        "14crMobLJtOt7BM1WQrYt0jxn5wW_xF84",
        "1nOp_WZ0NbyFZtJqKHCDUch95iKMhis2Y",
        "1nNPHI8CJdajR0JD5yOUSa2fh1pIN3goO",
        "1NhQaB6vqdyMsKY7iWfhlI56AiZhAdLvi",
        "1XpSMxAoPxVxxX9UQzvCjjrgbdxBd9WfK",
        "1FHbZ_fDC5KgaFD-I6gfiFChvt60hd9rM",
        "1Irr4QgLRASgW9awI8y1IpNKZB9SKAnhT",
        "1BnsIfJsX3OOFqTfDoazFPkwyQ5LCe6Dj",
        "1H08-BRwGXUybDJjZ_SoNP0t5rCJTPmbh",
        "1bx3N4fTYyIXGFAh4YZTCMO2kMM-I5CAr",
        "1z1Xt8PmkitESanG060iuMJLR36JkurD8",
        "1heqMNJJh8Nf0okQCGhm9xwrVmzF_Vdig",
        "1ZtRv5Xj2ZR5PznG5HHMetVwtfJy1VvTt",
        "1oRwao5k780f8ikr7OBX0XhEYDzAQk05n",
        "1w-PKlDYwlbkdAK7j30aKlwpcmV1_8dB4",
        "1472My62ZPTuBSo86l0Lr6zlHOwGGKkbn",
        "1lZqXaveHRJ5Q30P3d8YkNfEdkX66kCSA",
        "1K7qhLaeb4Q27IvA0wsGZ4SCnIufZnm7S",
        "1tkDrtvtRG2ArLtq4s-kP2qI4y0zhrsxp",
        "1w8cr0Fn2MzqTHzuP-ZjjmNqDtVzEVlxX",
        "1klzMuXZFsvgZQljYT9Q_KgTJwj-b0ys8",
        "10B5GO8yIOFjwV_vuduvhSLeKKufKsjPX",
        "1uFkPwBHHH6cfzZecke0YRqf-QEb0XpQx",
        "1a74LeaTNJZzC1jjbcsKTDXXPHoBCd-Ye",
        "1fONPb6MjLs5voQWPFoRrrsHsdVJgItmf",
        "1hdinZJ-iG1A3z-mw2ztPZ5VHKsspeGIZ",
        "1nBPqVEQSnJ76wnUt18SIapzJ4g1R9L-2",
        "1u2kc1QH2YXhll1fk_6Z1_qNL3ARPAOuE",
        "1P6eIdCzCkxjp0Ez5w8u0452UaauAKy2a",
        "1GlRG77d-23wHgaIX0M1fCqGK6u_O69vv",
        "1h7MAvVbfRwmdm2BjzKly2cGrrW1k9RM7",
        "10nGoLlIJZkJ7qOfCv-uMsC1JV__t1oMw",
        "1KSraiuFICeFCUS1DYC1CG7kJggegoysM",
        "1daoz_kW2nmWBY-8o3So9sQ0QQMRb211v",
        "1gVQL0W4mmACyFC8sNWnN6in4Rb7i4Gnf",
        "1MOB3CPlQ1DrehfT8ktax-hVgcy4aQgvc",
        "1eNlRWHmAR8ll14Rgfn9HS1RKNFOWpQ1-",
        "1-AsvHgLSa65JtKrnV7acCjoVaaZ7lJMK",
        "1O4p52FtdTgrn6X1AwloTxV7OZItV9W8i",
        "11zw6CzDVJSNkuqUMU6R27iFM4xXxq9R3",
        "1CtokdxTIvb-YhS0DGWkS6d4hdW9CLUPa",
        "1jxsicD6re_TV9_IfL41buvM2eIpLqmnp",
        "1bJH3YsR7WnW3J6n5V_6yGFzEtp0BsCxs",
        "1t_J8dLvhjbcldcuV8mw_qBrt5QrOhw7N",
        "1uCWl3UMbTUEbQAmEkh076Ti43xt0vZgh",
        "11HzLeaIhEFryI-7tnSfQzG8DDx6od9VJ",
        "11fXwUor-cKIziUCPdOxWFr0KP413boO7",
        "1xYOVtqwqmB3pi8abQBUww-eRu9g17qZ6",
        "1FYpp0hpNeMgDymu674qW9mhoYhIL-fmT",
        "1tC2oZXvNoxjIBl-V36Cz1ctBbrV7458M",
        "11XW1yR___RzWQ1I2vJrzmG2_r8zltOKe",
        "1g6hWaQ2JFq3C6JBtBz_01ovEP1bg9K_T",
        "1FT3I3NZxYqy0s1eIzrJIVFAG8uX6X9DL",
        "1w19Hz89I7vDwORYDGN-OQmWWTfCI7AaH",
        "1gkqgGtpVt7V2fAVLURUJJQQD76XBGK4B",
        "1pI7jDMe8pFo8qAxZZxXWjSA8NsXOZE0E",
        "1oeY3JnzDFB0sEY-aUJjAnOKnXJy3lvBy",
        "1qsBZfBSfDm755YAOpVvig1oDMcEaFbSE",
        "1ItT03qkbQQMETVEhCuF2q7a8RHvlV5Rw",
        "1tka3b5sV4lbJeXTG8d95_-vN_VuO8okT",
        "12O0A2-tAw8bhH6FGIhsF7FGjsDhVqFM9",
        "17jZRqKpgiNXUg_l8R_89BuZ8fDAfvf7n",
        "1uG2bBbQdQdHvdze3_th-cZuj7H5XeO0C",
        "1CL8AAJVHFjfAe-r2YlQarQDGlTyz3FA2",
        "148E2rrLkK0xeTGBtTWV-OZCl1-lbW4GD",
        "108VVTyZusoGvfvulC6I8RjcCqMzgfRS0",
        "1AMRxbggbRCzeu2BTT-sQhgcM3zTf2qGJ",
        "1dYjsQlZ2ZbrbLAPE6OtZQgTuCDjiiS8n",
        "1C2qFPuV36VgmZKQtPUtLMEpFkg-RSORo",
        "1iG5-HqxFw5aRhqEVklNDkPBMKubGt60q",
        "1c9Tk-6m469DU-wCjbvoHi3hS5gv0TJyQ",
        "17_yV4GNR95qTesinu0Tdb4lmuMlo2NeY",
        "1J9QRx8NA4YiD2FNQDZngUKR6jJx-48Q8",
        "1EWVf8kC_cxB9AP8aA_CJCzZ39y5gE5r0",
        "1rq4-Fg6iT9EOPzM044fo3CTjz9jn65_g",
        "1FB9S3PRlarKBLKTb4Tc4dfqRNilnvIp6",
        "1MdMIiACZU5UkNn9jEW73OsJ1blumbhDK",
        "1aSt3RMpFv-ErQJm0j4aUst90QYh5eQLT",
        "19fts_qAnOWmt82ICL26XEt-D87CpjuiN",
        "1BL5BM6RlurdslMKhqHO7O7IasIYHCg4g",
        "1ycmO0mRzme4woJwHZ-8OHaT6csbzbsFs",
        "1xGQwL5MGRer8xyXeHiJ8SU1em9NWK71Y",
        "1QPpxmT473v3q_DB-Q2hfFAOPmaHR3oBA",
        "1bQertQX3RTpe9DmYaw_PUKhiKaWQFXya",
        "1y2026cXLHFoEM8OrAGkdlILQ-hTNI8wu",
        "1_2yB0FjBuCKecK0NCRU8BCJ3e0m9hLB1",
        "1tDuyZ3DnZ_Qthgm2cuVTNIAwmmQEM_3H",
        "1IFjLO1n6GEnuAp31nPcf6QjiYNU6xXvK",
        "1wAv8enzsHDnI80ouOH-YXgkUBYyF1sF7",
        "1H9Zx7_P3XP8BzM8NW_sEnQuvhxMRhz1B",
        "1lERb-RF9JfIVCE9yCfmwUWo9xf3TLB6r",
        "1AIRCHr9PthOzAFFJ58zts_ZZv0AgWXSA",
        "1x_31nJkPBdZMeZ97KazBBfhlyXM4_rd1",
        "1NHQ9MT7-fAZH45Ii9J1DYLU1K_CKp2aj",
        "1c8QE5Hu7PFteryAGWfAj5WR9RSyDR1GD",
        "1LQrSVs15FDTa0QLugaVUi0O9XIDPxwv_",
        "1bnwVgGUHLrcVYeVdrnkRxpHk-OXpGJZz",
        "1nQGlkodJKiQYdEdmzTmfhCLfWNP-Njq3",
        "1B5DJ5bIRW0xXq1k000lXUOrgfGO_XcqN",
        "1LnXQy2uL3ZSO3xZfhwBm9Bv2cp16XJxN",
        "1-LKPM9vtnEVgjewWOC7UPLJhV0SggQHG",
        "1TXWlBjxzjdobkt4MnFW0Jo_8dVbYu1or",
        "16DYeTJpuxpXBh3BK1CTH1aacLhAAb08F",
        "1_atNt9IOQwIrBPjCGPRmSAP5CmYYl8Vp",
        "1louvcYP__UevdlvrXjndIXwpH6jATLok",
        "1JJVxWK70NtRPftJ7WuCNIfywxuX5Ybmv",
        "1GOBFOeOMiaYh38jyNsApZHT4SQ7PrA0E",
        "1hOtH_bkpcNFjxzm5y6kQg8-rirEmEHjk",
        "1Uf9bOpqqyWwOMzc_cv3wH2iwUmQzjnh6",
        "12gjcldgw359bOCuGa4wRdGz4Pl8yn_q1",
        "1W795CiH0tSd2UdaB30IzLX6ApVsQAOfg",
        "1W_u68_3nXgU3XKney2iFXR6YJN6OKFc5",
        "1HdaJVr7YgjyDDt1MkNJB-cAmCD43zGFt",
        "1iP2Y-3iudee7pF7Q3llpUpP-Fezhzly3",
        "1T7Wyuk9EQf4Raah3dVrq60Uxfi7ofjCp",
        "1u4Ves9TilYSIKHeVei8F07P1FUCX2jey",
        "1Ti3pcL9FFB21Kracaf3i84amAeWB9q1B",
        "14ygTrjw_asUlkKgjGa2WqSQB65y-YGB1",
        "1JERfcw63aTHMFuqaEzgPQSAX7VWI7QYY",
        "1pgdPfeQy5PIwA_bSLPFwIBhrQhzO6dnU",
        "1lczY9bZMhi_C1B_abwHOg_Gjp0YrKX15",
        "12jLuT_zNlHxlvGS4H637AGBiakYGgH7n",
        "1vHmoahho6NLAzN47uT-KYg0SxkPKy7-v",
        "1V-HrNfyi9zEabkhVdN3zfSWe0V7pCdPt",
        "1YSxxndCr9Ktn1nNlN7tBMVFr338NY9Be",
        "112Jv_PFfsqb0gtIcwpawqp9eAbeXQX_W",
        "1rz5rTPJIoynkIA87qyST6heyCtF8-YiJ",
        "18QXet4BZhrLRphsL0Y3YSQrs0hoya2-8",
        "1WDB3FaKSXUM-Cp0u974P21hD1WQv1gUM",
        "1ixOtrNCEV7f6vyxUp0U9nmg-ZNLvzLy6",
        "1tadVoM-htANA1PZiMj65DoFkvPBDyZ7e",
        "1aWUj5Am-1hbd-gH1o8bLZuugikpZdXWg",
        "1LVBeaxMrzycKr97Tb9vjK6VdeHo8ImkH",
        "1Rg1T538VrumwDQEWmynsoDaI-fLWkH2M",
        "1debxfqk1gRax-vj50nUaehJUd0vn8s7q",
        "1miutl58Fy5Uqaf8rwvnluIQqLsDh4s_v",
        "1blhTtDj5ZJIspb3cGWkuaQHbFbR_D3Kx",
        "1mISn9yt5C_pWXZQWsfa4BFwarWD7sBkn",
        "1oelTnQcIMT-U8YiRsE8Bg5CDFxwrkjJI",
        "1sdM1QSQm1wXTzRkfBGbl6Mcw3B8MY__D",
        "1bHdta96zGQymkQ49VMCaXYImW77rHJHU",
        "1hj9D-F5M4lJf7mYF7BtWi8laHC8B3v-d",
        "150ifgNVb8gp9yP1I_GH4AkOjOGevhY1h",
        "1fyUzszs4m1I06v6aYkQcOfC0znDtedIk",
        "1xtQ0ITfcioExaWSSF6NG6J_WmP6ZKNmU",
        "18KVtJ1GsGjcuUkG_gzYEvOAyanFe400q",
        "1Wc2z9fgTOf2oa7DxoT_kVI8OwFQvKZ31",
        "1mH-5ML0eDRwD21IJelClYXjZwVGdGnJ8",
        "11tu-SIDETEZZhh39i9_Dfmbv6t1f4Owt",
        "1ZndTWCQIHsRL__6c-qTJkkFNuUpyZYsv",
        "1wEVRqCToMROLqG3FlHMnXsnjw0D4O4RM",
        "1OiesA7uIus2nKPrZdKyh647WTNJVN2Na",
        "1pCyHvvrMEUAprIG8IntSwJ_iApd3v_-8",
        "1X8UVfgYaKfBOT8MwUq14SVttSkkCmzSL",
        "1aK_1uR4Xh7XH4LPeDgfKByqYnI9vwNqq",
        "1hioY6eg5X2QolsYQEkHc0AF6aPpmzTY9",
        "1v3c_5cBjCkgtBR56ZM0swZSMHXNc3ugp",
        "1My-sIrVZoUxnkBxoe6o9fU7FbUcNojtP",
        "1FdPTGOoeHSovfOUMSAvoqEWwGIAJTfhC",
        "1bE7wB2QIjrJKGSiq9Jm5iBcCMlYgrw1U",
        "14KZyWABRmMfBVoPi4Uk6fUnDs3tOaC8G",
        "1yDp96AB8Q_G5WqherMdqDpK0YE-EqP4g",
        "1-tueam8QduTtAlZtPZF6VyBxqb0KFCzw",
        "1NhEHGAB8dpQwAevm2PzDsppG-EMmjrtM",
        "1DPbc6jxyhAIuiTfkKuzRHFXv_pHQkESq",
        "1LsYAus-UJi2wgmqErrbUvV_1n8LQOp5P",
        "1q4XaZh58dzbkbArt_imXMi5bswbeu96W",
        "1_P39UTXY-9X3mU7YTYCei6oX0CO5-3uV",
        "1Eqa7ZD47WpzxAueB8waKf8bWqVDY-E0V",
        "176DsJ-ZVJjMlOfpdO4IWe_J2hNz5us6S",
        "1pxis-sM1os47r9ck9zHTGSoyjs5Sbayp",
        "12O176Uzwr407xPe4tVL_pGQ-Wd4NUK6Y",
        "192rdpkzNujS8K0S9eDqHyR45TXNMDwnC",
        "1w_bWpncAEyS2sKDdjr3RSdxQgYnGV1hd",
        "14wXbeU1SwRQ43sjQnzq6mO5uWvogCYeE",
        "1iycSGcRFk4Uk09TFTGZwfLPyX18hyfvm",
        "13CY-E1-bAvhLjiXIxmWU3DKgjnFM4HgT",
        "1XTmoquqpa9bSAbAbtVbLOCHE2MgCKqh0",
        "13SHvhhT1r4jNcSLRUp7uztte5EhmbWHG",
        "1Z34x1eyF3ezO_ivuch2I9bPzmiotbBYF",
        "1DnqNMfPYEmA-kCtqUFsQ6wQw6q3O4E4h",
        "1cYABqP6gwY_JRBy0m-sEr1ctFTli2hF8",
        "1Ab0CbpGb7j3kpp6cXXmDsUy6X3-M-FgI",
        "1iNerG2NMaFYFg9i6evHue2s-aG2U-Ujg",
        "1dSxo1YNTfZmDqMM-gpoQh1pNICldmaJX",
        "1h7o4j6Gt8furNr6LVj4qt91S7d9tdZl9",
        "11saIS0bSz6FmTSxLJFZ86g935blqy_cm",
    ];
    const selectedPhotos = [
        "1JuqFdLbeL9BUT5Ky8hlYbERoZQJU649f",
        "1doZdC_qbLTe-lVyZyOdXWhOtOQiD2o4_",
        "1NA5U5wPQmA7AyJq3mPsEcsMiG9n-ZlGM",
    ];
    return (
        <div className="App">
            <Row xs={1} md={2} className="g-4">
                <Col id = "Photo Bank Column">
                    <Card>
                        <Card.Header as="h5">
                            <Row className="d-flex align-items-center">
                                <Col>Photo Bank</Col>
                                <Col className="d-flex justify-content-end">
                                    <Button className="m-1">Update from Drive</Button>
                                    <Button className="m-1">Add All</Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Row xs={1} md={3} className="g-4">
                                {photoBank.map((photo) => (
                                    <Col>
                                    <Card>
                                        <Card.Img variant="top" src={"https://drive.google.com/uc?id="+photo} loading="lazy"/> 
                                        <Card.Body>
                                        <Card.Subtitle>Image Name</Card.Subtitle>
                                        <Card.Text>
                                            {photo}
                                        </Card.Text>
                                        <Button>Add</Button>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col id = "Selected Photos Column">
                    <Card>
                        <Card.Header as="h5">
                            <Row className="d-flex align-items-center">
                                <Col>Selected Photos</Col>
                                <Col className="d-flex justify-content-end">
                                    <Button variant="danger" className="m-1">Remove All</Button>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <Row xs={1} md={3} className="g-4">
                                {selectedPhotos.map((photo) => (
                                    <Col>
                                    <Card>
                                        <Card.Img variant="top" src={"https://drive.google.com/uc?id="+photo} loading="lazy"/>
                                        <Card.Body>
                                        <Card.Subtitle>Image Name</Card.Subtitle>
                                        <Card.Text>
                                            {photo}
                                        </Card.Text>
                                        <Button variant="danger" >Remove</Button>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PhotoList;