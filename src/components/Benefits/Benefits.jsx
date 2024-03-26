import React from 'react';
import BenefitsItem from '../BenefitsItem/BenefitsItem';
import './Benefits.scss';

const Benefits = () => {

    const BenefitsArticles = [
        {
            image: "https://s3-alpha-sig.figma.com/img/aa81/201b/963ce632103096f161d1bcf0afe51303?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hkoEtadP20Fosmk4ZagV8Ofniy-AJD5FhA2PXAkSmgKgUc04FkT4K4gXF~or9NN3say1gJZpz8ffSkXwvUSDSvjP-Iuy8ocalx6vxGdgvaZuuxU6oKP1WLJJUe6fJ7TFcyUU4vpyfTm8dNdSm1RS5gI3ynNwGWA8FFRc8u0EHotXZ48ZMTd7F6~gItyChKQBrK~eMVwuPQV0YXmKOmpTmca6j6hls79L8ESVg9J6FGzP8bm0QMUDlWp3-2Cj7XLahKk1KTGPHbP74potIaJFr0BQ2~gQ15lixEkOYy0QJwT3x5zcuKvhIpSPfrIPnUcoCQdvvKuuq72Ox0-II4nYjg__",
            title: "Оценка способностей",
            list_1: "Развитие навыков будущего.",
            list_2: "Развитие новых интересов и хобби.",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/c7fd/db7e/a128c26f8f4bc65cd6b7a59cdb7b29bc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hMSG3hHh8p5VLxMT2pMCE5-2LatAFfxxbsbWI6xugsWuMTeaDPNLdtFj61P6pOWbOmn2jNxxU3mGpmRefdAwM0pjD~8gEUo4h5gKyZp5ro3ZTdOaHuGWWtLchQYYaDfdzIRCYwpY2yIw0~vnkcH5idbrhGmyH-oGF-E4sWDfCDq1d150jyhfWH5ca8aKM9xyz1UzfSZYQxw7ciACih6Z5E2~KDdXgzHEBYhIf4XOecJaldlQzPxOegL0RvZt-OfAm70po6cvuarc642b4HYN-PCVLkRyHbYwx~2ZidI5QigXSrf7vffwy7peG8ufgWungTJIt-LMyLEBa9eCp-d0UQ__",
            title: "Ежедневные тренировки",
            list_1: "Развитие навыков адаптации к изменяющемуся рынку труда.",
            list_2: "Расширение возможностей карьерного роста.",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/52e2/3124/f764c317ee8041e9051e313daaa3e3ef?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXjkwFmwBrmGpBDWDHPn6qO~QHOtSim-MG~i5Zgg0jz1r8dwPoIm4LTlQCBCsQFVIPhD5WIBsNEaEFpEHCkUtD0U2DG2naYPU~iCqxwnYFo-afMZE4jlB-di-~toBA6DFq7KfkRPuUSVWkixV43vgTUY5D3Oa98a~TiYY6673TbinZ~e4MrlC-RKYDARGhMAbDxaaFwAQQ-lcdw4L4J9~wnVaXXsvyzTXr4Sw21d8qsOQeuadwzyzB3lRx~seBHJeliFUlP5iz17ZTnBt2hmS1Avs1a5vSBHWDq3OY13gnZzqe88cPcOBd8pbr8ZHgkT0WvmMarqaAEjoH826hzE0g__",
            title: "Статистика развития",
            list_1: "Поддержка молодого поколения.",
            list_2: "Решение повседневных задач.",
        }
    ]

    return(
        
        <div className='benefits'>
            <hr />
            <div className='benefits__maintext'>
                <h1>Кому полезны наши тренировки?</h1>
            </div>

            <div className='benefits__wrapper'>
                <BenefitsItem
                title={BenefitsArticles[0].title}
                image={BenefitsArticles[0].image}
                list_1={BenefitsArticles[0].list_1}
                list_2={BenefitsArticles[0].list_2}/>
                <BenefitsItem
                title={BenefitsArticles[1].title}
                image={BenefitsArticles[1].image}
                list_1={BenefitsArticles[1].list_1}
                list_2={BenefitsArticles[0].list_2}/>
                <BenefitsItem
                title={BenefitsArticles[2].title}
                image={BenefitsArticles[2].image}
                list_1={BenefitsArticles[2].list_1}
                list_2={BenefitsArticles[0].list_2}/>
            </div>

        </div>
        
    )
}

export default Benefits;