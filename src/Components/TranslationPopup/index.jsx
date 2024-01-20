import { TranslationPopupContainer, TranslationPopupInner, LanguageForm } from './TranslationPopup.styled';

const TranslationPopup = ({changeLng, setChangeLng}) => {
    return(
        <TranslationPopupContainer>
            <div className="overlay" onClick={() => setChangeLng(!changeLng)}></div>
            <TranslationPopupInner>
                <h1>Choisir la lagnue</h1>
                <LanguageForm>
                    <div className="radio-input">
                        <input type="radio" id="Lang1" name="radio-group"/>
                        <label for="Lang1">Français</label>
                    </div>
                    <div className="radio-input">
                        <input type="radio" id="Lang2" name="radio-group"/>
                        <label for="Lang2">Malagasy</label>
                    </div>
                    <div className="radio-input">
                        <input type="radio" id="Lang3" name="radio-group"/>
                        <label for="Lang3">Anglais</label>
                    </div>
                </LanguageForm>
            </TranslationPopupInner>
        </TranslationPopupContainer>
    )
}

export default TranslationPopup;