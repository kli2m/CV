import React from 'react';
import { CONTACT_INFO, SOCIAL_LIST } from 'constants/index';
import './ContactInfo.scss';

const ContactInfo = () => (
  <div className="contact-info">
    <div className="contact-info__items">
      {CONTACT_INFO.map((contact, ind) => (
        <div className="item" key={`${contact.TYPE} + ${ind}`}>
          <div className="item__name">{contact.TYPE}</div>
          <div className="item__value">
            <a href={`${contact.PREFIX}${contact.VALUE}`}>{contact.VALUE} </a>
          </div>
        </div>
      ))}
    </div>
    <div className="contact-info__social-list">
      <ul>
        {SOCIAL_LIST.map((social, ind) => (
          <li className="contact-info__social-list_item" key={`${social} + ${ind}`}>
            <a
              className={`social-icon-${social.NAME}`}
              href={`${social.LINK}`}
              title={social.NAME}
              rel="noopener"
              style={{ background: `url(${social.ICON})`, backgroundSize: 'contain' }}
            ></a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ContactInfo;
