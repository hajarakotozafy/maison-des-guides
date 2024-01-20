import Styled from 'styled-components';

export const TranslationPopupContainer = Styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    .overlay{
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: ${(props) => props.theme.colors.textBlack};
        opacity: 0.6;
        cursor: pointer;
    }
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeOpacity 0.2s ease;

    @keyframes fadeOpacity{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    `
    
    export const TranslationPopupInner = Styled.div`
        background: #fff;
        z-index: inherit;
        padding: 16px 24px 0 24px;
        border-radius: 2px;
        h1{
            font-size: 24px;
            font-weight: 700;
            color: ${(props) => props.theme.colors.textBlack};
            padding-bottom: 8px;
            border-bottom: 1px solid ${(props) => props.theme.colors.textSoftBlack};
            position: relative;
            // opacity: 0.95;
        }
        animation: fadePosition 0.3s ease;

        @keyframes fadePosition{
            from{
                transform: translateY(-45%);
            }
            to{
                transform: translateY(0%);
            }
        }
`
export const LanguageForm = Styled.form`
    [type="radio"]:checked,
    [type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }

    [type="radio"]:checked + label,
    [type="radio"]:not(:checked) + label
    {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
        color: ${(props) => props.theme.colors.textSoftBlack};
    }
    [type="radio"]:checked + label:before,
    [type="radio"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid ${(props) => props.theme.colors.textSoftBlack};
        border-radius: 100%;
        background: #fff;
    }
    [type="radio"]:checked + label:after,
    [type="radio"]:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        // background: #F87DA9;
        background: ${(props) => props.theme.colors.lightBrandColor};
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
    [type="radio"]:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    [type="radio"]:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    .radio-input{
        padding: 8px;
    }

    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
`