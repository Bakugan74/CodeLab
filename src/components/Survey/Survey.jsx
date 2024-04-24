import React from 'react';
import Button from '../UI/Button/Button';
import './Survey.scss';
import Logo from '../Images/logo.png'


const Survey = () => {
    return (
        <div className="survey">
            <div className='survey__wrapper'>
                <div className="survey__logo">
                    <img src={Logo} alt="CodeLab Logo" />
                </div>
                <div className="survey__info">
                    <h1 className="survey__info__title">
                        CodeLab
                    </h1>
                    <h2 className="survey__info__subtitle">
                        Лаборатория программирования для новичков
                    </h2>
                </div>
                
            </div>

            <div className="survey__description">
                <div>
                    <h1 className="survey__description__title">
                        Личностное развитие
                    </h1>
                </div>
                <div className='survey__description__flower'>
                    <img src="https://s3-alpha-sig.figma.com/img/09ed/b014/3c31945e4d1412cc922df665531ccb75?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ceetc8dEk-pbRxLKxhn0gqA1-UWGravie91GC9RF35oGahekH4DWDBA58P6jyWuX~SlPQQHFpoRM-p5oLmsWbbJk3SFzdNhxUhgEic4Y8HSVe8xO1ZBmqbVtej3uJM9watnBXdCbWXb81Ql5mfBAvEWTG8khrhyjuW89Q42Di1UqCnAngd-URa5gEHgQIokyFYmxduPiOJAdK9FIiXR9As1MkxSwTQ4s6JLUnWlvuhKm0vM9RfSl2Gh0kaQyYBffCj5gZU~jBKOTaWzZuEuCTZnw~N0OJyzrR0yEsyaYkWmpO9sU~1Yhv5FKTE-h6aoKEOcwGlKII7t7LztQ9~57lA__" alt="" />
                </div>
                <div>
                    <h2 className="survey__description__subtitle">
                        Сначала давайте выясним, что вы хотите улучшить в своей жизни <br/>  Например: Как вы оцениваете своё личностное развитие?
                    </h2>
                </div>
                <div className="survey__description__photos">
                    <div className='survey__description__logos'>
                        <a href="#"><img  src="https://s3-alpha-sig.figma.com/img/8e09/cdc3/7c2342d49fedf093841995c28857e633?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lm4jN3SLl0pbm-XoRGjAwP9w3Ap2NuD0Acs4sJkkLxOnpeqfQSL5Mk3BRObzILmvyvK~8K22s3bISSE0WyR8XvMmE2I-C~fiF7XENzK8BYYoFKwFt30zfHI2rB64AZ6xG6EOmXe1zMAyWoaB3kfCSWMekd79Ubmed6qLXSxhSVWqnea2zWafSLDiPcKVuXNrPw5ijRbqP96A48VLf-91D2LmvpfMs~UFMjsueajL72W2NfE0vN3iz5ttWD~LYKFkSscL9sCbU7EU4IRqWkXCan9jTOUJtyBesD7OrLI7Jxded52NODtcchdOLMY2M5aF5~k0yY1D0dmxyTFS9b4OkA__" alt="" /></a>
                        <p className='survey__description__text'> плохо </p>
                    </div>
                    <div className='survey__description__logos'>
                        <a href="#"><img src="https://s3-alpha-sig.figma.com/img/1281/d3db/c8292b5ccb23ff0ea078872bf76684c0?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DFeHEUUVxCSe-qor9UoYRPsTKhguxViPBBmnMoLBglXVz7X4n-0LZ5OMKkX6o7~dQXKohbIN7L-SAKv9d4DKTPBY4azDs8bSOFeH3wtn8bPsilNC45nIqIJyDqwmxrYlITX-KlLlyfUdH-UezcjOX83LhoyfuFGltE2e1K~EEs4mzJwmZCbCnMEOtyh0EoJXCLTVUMEVmM~JDSYhm0AmDZRNI1agog7zbPY-D7alrMLSYyEsrsqHcoDtzOHx11qarZuAZgrqUZoziVvsxes5wTDNv-YXq80faJdRjtI3FoScYzFoDSbKO0mNqNoRJhdwBli0I7gksv3SW-kFvEXwRQ__" alt="" /></a>
                    </div>
                    <div className='survey__description__logos'>
                        <a href="#"><img  src="https://s3-alpha-sig.figma.com/img/e940/157f/b9ed010c4c24733283d4153347da8869?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q3ynbwEudceffRtr5lFWsfMGakQBgTwbkLgxBmNi~LNuwz-RszhbUruNtPbBUBLREUxNhS7zWf3lZBvFuhwdEdbC34~FSi~pUWpuGjvo6THuNUnLQevHoDCXb5xurIGwDvl8EEF~6gdfKMt5N1C4J4~8UARv2li3UBX6psUZxS~tQ85~M9uGuBQwxmk0rR4NfAC8k4W7g2Lpm-VMizdzboEanZEPQGpAdPYvv0zI2GEupITzEOPKK2T~3mrbgjcRoFqbJREuurI~-uHp1wxXsEZGC-gT82XH9dmoTK3t-hlKZP3s21XkmuZUUYxiD~E3d736gf2v2XQb0kIGYZLCrg__" alt="" />   </a>
                    </div>
                    <div className='survey__description__logos'>
                        <a href="#"><img src="https://s3-alpha-sig.figma.com/img/5acf/9ed1/c5d1e73525247287d21a1916bb0ccabb?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=myGWC9nGzFOCSJCpxqwNHXBQCk2YjpLPiKAZwFBdiWMBD0avxr27CR6b9nj~agK6Hi3OE~UNYW92CfsQecku4dSs1DNWmPK-E8xecV80rcxyQfZAJfZtTscTNjRK-q6zUEvnMEgqcJTJXqNJGNWZmNQ3o80AMSnNNMGFdA2tqofddqXmNu82Ia~XAv2D2fHaDOVV-6jMPHfGzReoCb~BTNmqMjAxSTqsOK1DixdBqHOSiRlPkEyQyHrXXRfPuyIAfVpU3be1ah8QgVCFQCFEO7gwnTq0kOY7X5JjBuNHD0mgRXPE2Nufce8yOMminz3R0vKoVgWDvrVx-uVgdmfBTQ__" alt="" /></a>
                    </div>
                    <div className='survey__description__logos'>
                        <a href="#"><img src="https://s3-alpha-sig.figma.com/img/2331/c498/8e3dc348bda9ec69435493cedecff95e?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tx7-qvE-qFtSxBFaHbkrP651WGbevQxq3dVq7gQoACmXtg94TSpDQvti4DsicFCM8nZdjwhdQGYidxABQLFa~AVbi1gi9PsxftZpJi2qs~1xz4nlKRqT2Je1f0oVWc5j9VWe~vNquDsJODD8aYOriPGwNGam80Op7EfkRzV8RSq9IkXJ4LFLWDENy4w95RVMVGJjJsYs7844YAGstwXUYxTXCO6rP4QfXjzthVRk2PeiIbU3hDX4XvUxa2qtcX428GPd7LJympIb0Zyc~ubxAokSUkfvIsE7mLbL0IcXm2D778KlBBOdIZO12A4CmZ1q~bZXdb4~1qWEpPiwRZFDaw__" alt="" /></a>
                        <p className='survey__description__text'> хорошо </p>   
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Survey;
