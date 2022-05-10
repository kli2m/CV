import React from 'react';
import { contactInfo, socialList } from 'constants/index';
import './ContactInfo.scss';

const ContactInfo = () => (
  <div className="contact-info">
    <div className="contact-info__items">
      {Object.entries(contactInfo).map((contact, ind) => (
        <div className="item" key={`${contact} + ${ind}`}>
          <div className="item__name">{contact[0]}</div>
          <div className="item__value">
            {contact[1].prefix.length > 0 ? (
              <a href={`${contact[1].prefix}${contact[1].name}`}>{contact[1].name} </a>
            ) : (
              contact[1].name
            )}
          </div>
        </div>
      ))}
    </div>
    <div className="contact-info__social-list">
      <ul>
        {Object.entries(socialList).map((social, ind) => (
          <li className="contact-info__social-list_item" key={`${social} + ${ind}`}>
            <a
              className={`social-icon-${social[0]}`}
              href={`${social[1].link}`}
              title={social[0]}
              rel="noopener"
              style={{ background: `url(${social[1].icon})`, backgroundSize: 'contain' }}
            ></a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ContactInfo;
