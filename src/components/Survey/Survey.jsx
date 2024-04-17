import React from 'react';
import './Survey.scss';

const Survey = () => {
    return (
        <div className="header">
            <div className='header__wrapper'>
                <div className="header__logo">
                    <img src="https://s3-alpha-sig.figma.com/img/5aea/0de6/29d7575ec38bdbb0216201cdbb98ff88?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmLTVRFW7Kijl0q26aq3xBktTaUsu9WXM3LMofxRmSYAkGWiyu~P1ygCxZDq1V2LzyTTjIqfPHI3kGAsEXQj2vgvb01sPM-sc2MppGVzt-DZCVNKbcapIHCBBOt99YoW1XM4HoypebG-NxLqZlQWhdXKjVs5hN6CBcGow6E8I7Le~mpL-~wzv~AlDzUK0N8yLgf6DuL1wDvuouMi4n5hG-2onEkSmiI2pEj33BeseYaUwq37r2HyvONkL4F-y7U3CgRJg9KRKQYDTH5J7s0sKkB99tZ6QAG3nhzKtKCqRIWCGF42x-skj6hTiZ6txXzZz6VdybG46lsruoXScNH7GA__" alt="CodeLab Logo" />
                </div>
                <div className="header__info">
                    <h1 className="header__info__title">
                        CodeLab
                    </h1>
                    <h2 className="header__info__subtitle">
                        Лаборатория программирования для новичков
                    </h2>
                </div>
                
            </div>

            <div className="header__description">
                <h1 className="header__description__title">
                    Тренируй свои навыки не напрягаясь
                </h1>
                <h2 className="header__description__subtitle">
                    Развивай свои навыки с помощью онлайн игр
                </h2>
            </div>

        </div>
    );
};

export default Survey;
