import ButtonRed from "../Buttons/btn_red/buttonRed";
import React, { useState } from 'react';
import s from "./index.module.css";

interface FormProps {
  title?: string;
  text?: string;
  isEmail?: boolean; 
  type: string;
  placeholder: string | number

}

const Forms: React.FC<FormProps> = ({ isEmail }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) {
      setError('Все поля обязательны для заполнения');
      return;
    }
    setError('');
    console.log('Submitted:', { name, contact });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.div}>
        <label className={s.label}>
          <input className={s.form}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Ваше имя"
          />
        </label>
      </div>
      <div className={s.div}>
        <label className={s.label}>
          <input className={s.form}
            type={isEmail ? 'email' : 'tel'}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
            placeholder={isEmail ? "Email" : "Номер телефона"}
          />
        </label>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ButtonRed text="Отправить"  />
    </form>
  );
};

export default Forms;
