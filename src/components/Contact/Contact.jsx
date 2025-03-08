import css from "./Contact.module.css";

function Contact({ contactInfo, onDelete }) {
  return (
    <li className={css.containerContact}>
      <div className={css.fieldWrapper}>
        <svg width={28} height={28}>
          <use href="/src/img/sprite.svg#icon-user"></use>
        </svg>
        <p className={css.txtUsername}>{contactInfo.name}</p>
      </div>
      <div className={css.fieldWrapper}>
        <svg width={28} height={28}>
          <use href="/src/img/sprite.svg#icon-phone"></use>
        </svg>
        <p className={css.txtPhone}>{contactInfo.number}</p>
      </div>
      <button className={css.btnDelete} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
