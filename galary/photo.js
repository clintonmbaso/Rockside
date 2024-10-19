const imageData = [
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/rockside/main/images/LNMD/IMG-20241019-WA0002.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1GDVAPDAsX-0oYL7E66I2CguwrAlJ3VAE/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },/*
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0025.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1C-YB2s-OlNzquYFD8vBefXxOp_E5O_er/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0026.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1C6S50OoeQVk19WLfy3Q0Yd1LnMdoBaZ8/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0028.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CAe65tH8xSijioVvCmdxR4IM6d107Zl_/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0029.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CFdt2PDFtsYKCJN6yYAEDqhEO4yBkq9-/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0030.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CH2iMLPS2N63wTXRlVZXVsoUzdHLdkNq/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0031.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CJuRYanukr5dVfZSCeqA-5fTJhO93DLo/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0032.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CKWBaus-YF7OJnyGgmKR32P4lpulhU4I/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0033.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CSnggzjNQi0YXzY7fe2mJHqzk0TSn9uU/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0034.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CUJijkI_-wke3DXMJkgLuNb_myESz95c/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },

    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0035.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1ClSmbIsmiOb5tvmiu8Umc0OxjqycVumz/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0036.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CvMl1DxXZ5aLiBY-BN1_tWfHSp-6Eldz/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0037.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CvsHE1QqmMMVpubFDZnnODwymE6-qT2S/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0038.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CwZR6DSU_v3sg6r15K3KHVDMSkM-PWSY/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0039.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CwkTAdy0SB_KzCG_5PntWHLiI6IztS0c/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0040.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Cxd0vffT97v3q-eUs5fYVKJY55Bnso2i/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0041.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1D-W3oJo4Nl1JXigf9aDwfCjLoAKoSXwZ/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0042.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1D8ZoKQMBPz0_zjrpV1B9z4qDofg-Lev6/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0043.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1D7nHNszL5MGjql5EJIYTYGPPwP-c3JuY/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0044.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1D9QaWY-iNCmnWzcdwkJj585f_vQYI5Ay/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },



    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0045.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1D9uzLJyc7bf6-QI7CBtTshrUEZ4jtP2H/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0046.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DDLgsEwGjVsOke1KMyQLJJ0GD65XwOKn/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0047.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DFY9lbsQF9Fgjx6fPYKMl_LSaxhuR9uU/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0048.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DGLToZlqNIHqmiRdxnY2TuROvqyPEkOT/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0049.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DI0T_8fAk12ahWEevbcZ0MuRbV0dGiHc/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0050.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DLMZmoLQ8Fh51P3V0PgiqKhYnptiAO8Y/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0051.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DPCxcv_KeCydt4E7CsvF_fujYViihuwf/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0052.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DQAoMgfHreJ_lrpkNwwd5FTqyuO8BSXM/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0053.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DSzsofySs5-6nhPh4ZQb-tH3MjQQtGWg/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0054.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DXy5-qoHeSUtppHNb5qZw8Uyoy3V9boJ/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },



    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0055.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1D_A-8BVhWqIqDEmppwtsm4gpBONpt90T/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0056.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DjVvPkfNe7dtH8ZBTpe8LNt42JtYWKVm/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0057.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1DpKvzcZTbqnnAbJ4k6TdTzjoshSR4PQS/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0058.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Dycugm6HIELyYHtboHW7EwXhkFjbx9SN/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0059.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1E3qTfDjQMwiaXvUKowD9FRCSOeeCiCsT/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0060.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1E4n1YRSuuwfKiWjXmwpCUAMuOaviT6tL/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0061.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1EJJeWzgeQ4gyDx5AB2kBLzkpq7Ii6hkZ/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0062.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1EMvlZxhKQVrMQVLk-8eUMaiAoZlcQeqV/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240809-WA0063.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1EOj8HSEhi5hcuyDR1PTBzV3LhRf21DiX/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },





    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0000.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1EqEZDuQ9nVSW8CiQrjNgz1P_iB3G9k2T/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0001.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1EtrU0mXbngAkus8QezerFYqDuVSjafu6/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0002.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Eu24EkIaOkk9GAC3lN6Tbq4ABNUU6sp4/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0003.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1CfqIjAO1SLHa_QHRqSe9ItuOk2caCC_D/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0004.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1EylIPQWp0Gt_pfpJFzGAWPbcnvdw1EIj/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0005.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1F0xCGqHMj0h4R7GwqtGmXJWwSDFTpsz7/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0006.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1F3m-_FeK1YNto7daimLH_mX3eoNPNmSA/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0007.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1F4GPDBAXjlvh9gnN2Or-lYrrmJR0YPv1/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0008.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1FHI7q_FlyVAV0Tui8iWaClM0w4PbOzFC/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0009.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1FLZO67RkQ0xql7HEKzFUfkcxnWYy8bcA/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },







    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0010.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1FQcCpxzS9GmhI5psu0tCpjPGBJ0aLb6t/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0011.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1F_3wZqZ2VvPcijH82OK_09U6FzhA0Y8-/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0012.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1FgbLghRdswWN0yWKbPJhrQnt3WhduOoS/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0013.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1FmBGUWdQhE6KWsyR82dak5uiVh1SGOOj/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0014.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1FtgqPVyMvJXiwoDFfUvjxOiq-jTZDv9x/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0015.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Fvzqd7I6rlFjgJ2wgfGK8mptcFLwz8K4/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0016.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1FxbjXKZPqMw4nAlChQk0ercbvEYqT_TH/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0017.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1G-lO7uzPB6tWGwzDJoRJb_N2ZsgSmfcV/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0018.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1G29fxPV-3vdcA-IKVCttMlOlcKVU2q7z/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0019.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1G4pOjrwKHEDJVVWYnCHJAlUZR1LePnn3/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },






    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0020.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1G5SrLeNVxHtg--13l2t5HBrLNBtRUU5a/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0021.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1G5sAtP_c4ZvTTIjL2AJLe0N-cTNrxrd_/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0022.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1GGn2Z2zxPEiw5TUKyREgv4v9AkHiwY8a/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0023.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1GKyImWFqDWKvr9DT5FmDlGIHtWMJRwAo/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0024.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1GK-63n9WqG5Rt3g-NQ4HDiqnEs0Gy5w4/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0025.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1GXGi9mPjQgjdd2A-8RNxIv0h6P8wRfvK/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0026.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1GYiqubn-QWz3ZItwL0oY6Zn4TNfWb8xE/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0027.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Ga4AX_W3HZjQOoF563UIVzTVUHPTM49d/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0028.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Gca5qbd6w94IQSl5ayfDynPYCxGZK9dU/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0029.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Gn-qZdjnt6i2UwQQ54xCd_OuFyDPQ9G1/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },






    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0030.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1GpFVW6SWHyrVYq9INTplqxYU5MjNljrw/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0031.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1GtqhVlc1iwi54qj4jrjO1E92mA7n7884/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0032.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1GwmLqbbVVuC4sjCmiiwbh4zQYWPXlwEQ/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0033.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Gy-Oc0KB3IlqGo6XqydVMQcnHGxDN-Ho/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0034.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1H2xdx-yUttAfmzLogCVbyxz7vm3wj3h9/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0035.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1H6j0AjZ3XPIEVCSNmxe2Q6taFNcxi2RW/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0036.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1H9PSQo3MVvtaatR_5chrS7mUyZXjE8Uo/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0037.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HBafGQ-hBEhNw3IH20sR2MgoRV_1u1_S/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0038.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HDnqf29RnlmBAw1564GybkhANWJKgqV1/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0039.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HJ8f6YPJQ9O5VfnFVKUVThOkjHI8H2YU/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },







    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0040.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HKOS5FMBGoQ4BBKMzNEZzRGbb2YDF_t7/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0041.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HUvHlw-9ZaWS2XUebG0dBQQNibus5Zuj/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0042.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HVpJzB0vubo1PqeVd5s8iKn-xy7x3v6x/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0043.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1H_F9HvYcYxgKAFVfseQfsme8dsjee3A_/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0044.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HcSEqT4ePF0MOMaaANrmAwSZWy6sh3oo/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0045.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HcWe6NKjHuvoPu3JxTAeg0jqobGlMtA2/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0046.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Heli5uqgCdoj0PhfSpkqJXO_gipfHvda/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0047.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HmBG6b-a2uMS0HtS48bZYoxl2UO2r5HI/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0048.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Hk6QarW0hJgn9QY4Kr5E5zzchjQdh0VH/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0049.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HpuaQnQk_QNmVq02xCO2CzIDLLor7eo2/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },







    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0050.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HoNpT9OoIZgWfIoxWHfsMU7UZSpKVtno/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0051.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1HwJAHQ7V2sKEnzloRFj5x2OobuKFbr-p/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0052.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1I0ZIe7x8YGeA9xY1aQV_w2DXQ9foHVM6/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0053.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1I4k-BCHnEjLOIh9TizD3bPYNPVKeAtZC/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0054.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1I27BC4HVak4lVjKOTy5mG4glouYqbfjj/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0055.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1I5nKiCwMlrbl8xQ5OBNusz_XqRZO0P-H/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0056.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1I8KjSSwnTtLZn6SpZenisa_VGyBVDQpi/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0057.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1I93aXbyMDHLYkLC4N-uY4A-shNbeckcf/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0058.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1I8QDMAIc8E5HQLywTeUPTCTXVHrvyHzQ/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0059.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1ICVKXjURWT9V5zRMprfskZ8lJ1QdEgn0/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },








    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0060.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1I9iJ1oZboy7r4ARctbhKZEp94hhxX-6h/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0061.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1IFPf1CFavO434S-tS30HhrjIqmaLiNy-/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0062.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1IN0OC0FG1er-SN6Bk4lQG7KTJyiphKZ5/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0063.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1IP1od26m_fDPuzAa7UR-XWE-OODZDEV7/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0064.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1IScd5NiGsLZWyfXOXXrCvsXGnmv0Cd9E/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0065.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Icqt_iJjAfUYWqPArVxZytaU_6vKAohT/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0066.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1IZj5Azy6puSoQ3yBC_8ckYm3FL7-_DLY/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0067.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1IorWEkk-MCOG6JMc2cMpyCtzJy5rTmDM/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },





// New Pics
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0069.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1LveMvRElCp8VRgM71QQ3VxoWRNgo_0uc/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0070.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1M-lgROALywJqnShxtp1NBTCqqSOSNL2s/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0071.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1M2NUozGC2YY5Qfn_YPa_4akTcbWPKxxK/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0072.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MGdkRynSzsJ1vsbJRirOcCWSIpkeujGs/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0073.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MHgY-913lA9-jfMC4Ob4hopQcviJbD8t/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0074.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MXHweUO1YwDK_y46D7rpmn-nQtm5UOYK/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0075.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MIzLocAcnP8VSak-wyWpSttCkV8RFZS7/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0076.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MaMLwzu4VoxKYkbua63UFImf9X6Y0-Ox/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0077.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MhmYVX6hysPX1_45H8e-mO9adLJoEXaJ/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0078.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MjJJ46miS1FgIz1Cc0PQbHe1fFyuV2j_/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0079.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MqKBAWRE3C0aCAucMRzbqOBPko-MSOef/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },














    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0080.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MrANFWHbXwyIsz7BLxLGNo4ojJJDxbl4/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0081.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Lj7kZIcGEpWikxe8_dGQ3PW66hBGR7HN/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0082.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MrffDUkAQ_NdIRInintcl-9KhPl8DDDu/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0083.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1LmzPS5MmrazYo7BT6TbDIUYsc0GkVRyR/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0084.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Msiuho1ZScnKPGNqknxr7C48hjTtPDPJ/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0085.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MyRPhPOOXmwg9euUFWuUH8jDV841NJwF/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0086.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Lpzc5c7Ker9OlrABWxRvoV7FACs5JFSX/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0087.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1N0yjqxbrgnOLBElxE-q4yTA49eVJcUWj/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0088.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1N1z90UM7v2mumret4NT641L8F3o0csYn/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0089.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1N4HM0v9rzv5ShZ3yx9z6qrYoZk8f8Lzc/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },














    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0090.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1N6N9K3l04_Ap91VEQ2I3iJXXY73Ewtrc/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0091.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1M-cnlmt-JVg7drLVGqhcFvTctdH6N77W/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0092.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1ND5Bp5Qa051zLuybEDo0ZmUIAeyOe_2f/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0093.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NKlmAhM1c3FqpCx8sS5G1XjDbEPsxVqh/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0094.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1LwJUSgMOFyZkMJOryGembZTGd67n9irj/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0095.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1MaMLwzu4VoxKYkbua63UFImf9X6Y0-Ox/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0096.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NWuEqdWxVe12uztemXKn7IjZ0btAhcA7/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0097.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NZOXDlpV2ryeDcpx7rK7B9BogMUEYqCe/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0098.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1M2m1r515EdtV20Akn96ujBxyOYKdRMeE/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },







// Now

    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0140.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1N_rlb75e_7XzsQLuPOvw3Qt4WLu9bSaR/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0141.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NaQrclq9U7vgjroPE7qdKGpuE30WLKiq/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0142.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NaiFGHy73MOjBkrjnVmVBhSXeScvDoFk/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0143.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NbbcMTPOD1HGSfqv1EwPiDUssPEuxRcg/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0144.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Nh1t25irTZnTwHIJiyfrMdBSeF2uSb5H/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0145.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Nk2XtEpVh85VDaB45m6tYCwttsdY7vHt/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0146.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NnO5SkZoUE4FL_2rXRJ1w0FrmcIZXKgV/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0147.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NrrzvJJkc-lcvrV-hdGC_EoXX5p2ti-V/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0148.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Nrth_b6gcW8o8h0pIH1koJSRCI3IDgSq/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },











    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0150.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NsT4bMqbYbyL4ewenF2SbVLD0TVzIQiP/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0151.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NsU5_ufbYL_eG7G16zrXsnume-ntjNLL/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0152.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1NvImjP520r9wInSc-52ZssDzLKwhHbrm/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0153.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Nw0LPfOjIyOEfLwykGbZHuAihJn-g04-/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0154.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Nyvt1h_4n8SFdcxEriSSzH0NEGM-eaN8/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0155.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1O4ZD4A61qEJmT25PRolKFeF1qrlxAXn1/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0156.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1O4nZE7UXPzCAew8APMLh-u0DxoXIckjT/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0157.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1O9F51BwMwk994w2PPLkCNkNnE4hNPySv/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0158.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OB6G0rSuvBX1n0aFoAc4M1QsT4pDDxX1/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0159.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OBfx-4vmOLGFHDH1SUVpXDN66DYSAftM/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },








    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0160.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OBnc0KG69N0D1VWIqhK8jgPxKcvcwxhk/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0161.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1ODaJunnw8JW3I4fphphw0pM463iFD4jv/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0162.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OFRefs2zE_yZYioM1xgIzxaTPz4r8B9V/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0163.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OJE4vSvM--LmWObkroy4pVXHKT31vGth/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0164.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OJMoQmBExdK5bKcDbbuFxqvjgMivk6L_/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0165.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OLjw0XqLqB9xMJRPArI-pA5So76vz2xh/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0166.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OLtY6Tb9IzA-tc7p1srsaVVZ4nXSI5GX/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0167.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1ONK7TDRvgAFpJZaQvzyRqUCZGNH0Jmbz/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0168.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1ONOE3BVYpCW24X-_WZsnbj8sDHInXEYf/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0169.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OOZG4SU0wiToCJVCaxyZczoMXYoosxxE/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },










    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0170.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OOii4plP7Y2iJC5tz5Ig1OmA6qN7MdEh/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0171.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OOym2c1I3AlVQPNRZ_CUX-R3v_SfSSU8/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0172.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1ORrw1hjJiJ_Iw6elMvUm-uMPSaBxPWsY/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0173.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OTt3CVjbznAdRAZESbZB5EVsNB1LW0Hg/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0174.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OZSFfsDu-1Szl4BBmgiO9aLZn5td4uEC/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0175.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Oa4FDYdwDKD14hFgowCOy0r1Thtl4Hm8/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0176.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Oa6sWNEUDab9it6BIb6EV7kbXM_EUHIh/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0177.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OecSy4Cv54yVrz4g9GpgE0NkKbKnxc7I/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0179.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Oi2x6x3NE9vJHsfebw97GOQES8mX57g1/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },









    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0180.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Ok9oOLp3xw_T4UWZ1sjSUWJc9oaMw2gp/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0181.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OsLPuRwkKgLuPSCAgKmMRfsc4YThDP_f/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0182.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1OxvCyHGY_1UTEDfLLLJX9fHoGRi5maGX/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0183.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1P6zHE5FK_vLEf35lmVFwlNj1PrbKTck_/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0184.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1PBJcoYz0WE5kHxogaViuBOSpGwcvwlSO/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0185.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1PKbwtRtF5nOlNMWn5H8GrNAYBalmNNU3/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0186.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1POrJuK-tpiUykgtL7-UDTBf1MRnYMTEh/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0187.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1PPPZaLIfZqSgqNeMIbpgaNYJBlRPNDFs/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0188.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1PQDwACJ22Y3xR6CXlHoMxnWnkduYV7AB/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0189.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Pe5Ti43mbBqDIc5JneOSkZeO6YjpLcSF/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },








    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0190.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Pet3SAxFW5_ArbrZSMXxDv8oEq7FPo4-/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0191.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1PiWTR4ERC1mNCc1mj4MpIg6v5dr-r32G/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0192.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1PkMViSUV0qO5Z401K_G6RUL-UkaPh4Cz/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0193.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Pq_MRuyVjPWcrQF5JX9-llScbv6pdBDF/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0194.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1PkbnJCG00fQY1hoxLNxwK1KoyiPDtG8m/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0195.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1PveCW2yYP1L_B4X4QPihwc2hGd6GgBHH/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0196.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1PtWZ5EWxPtDrLOndyGCoC_Oupbl-B5Qj/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0197.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Q1xKtknwChfwRemgGeLUoDQhVGp-KSaj/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0198.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1QAXLyi8SUSTCGkICcax-Gdw67bxVcHls/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0199.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1QEQIsdsyqyi5SJZLU80nAxHoda-dlUCf/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },









    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0200.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1QJcZl50srcxmS7LTBhXu59Ty9Gl4hvcS/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0201.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1QKUGhyPfdHRioHh3OAKGkTLlm1pCRkTx/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0202.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1QMzrAEkknHbup3-nPtCtF9a3KeM3Ugpq/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0203.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1QQwo9YzldYYdR876S09WFI8rUfjiwgrs/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0204.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1QQMIWQkiwPeLQ9z2XlOtS7R-dClWJLav/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0205.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1QRAYXS4CapzFitN5lMUcD3pTzRqVriVN/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0206.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1QV4arPxF8tmcuvDQkuCYv241paWKaAv5/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0207.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1QY6aZiWWyOOPML0dUVB0fiMD1rmLwNiQ/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },
    {
        viewUrl: 'https://raw.githubusercontent.com/clintonmbaso/flyacade/main/images/tour1/IMG-20240811-WA0208.jpg',
        downloadUrl: 'https://drive.google.com/file/d/1Qb6tPfCEmd8C6UHvqFZoqxd61DPn1uwj/view?usp=drivesdk',
        alt: 'Kabwe East Mission District'
    },

*/














    // Add more image objects with viewUrl and downloadUrl here
];