import './closeButtonStyle.css'

export default function CloseIconButton() {
    return <>
         <button type="button" class="btn-close">
            <span class="icon-cross"></span>
            <span class="visually-hidden">Close</span>
        </button>
    </>
}