import React, { useEffect } from 'react';

// Modules

import { createPortal } from 'react-dom';
import classNames from 'classnames';

// Components

import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';

// Styles

import './styles.scss';

// ----------------

export const Modal = ({
  bodyHeight = 'sm',
  noPadding,
  closeIcon = true,
  children,
  onClose,
  footerData,
  width = 'sm',
  title = 'hello',
  open = 'true',
}) => {
  useEffect(() => {
    if (open) {
      document.body.setAttribute('class', 'overflow-hidden');
    } else {
      document.body.removeAttribute('class');
    }
  }, [open]);

  const modalClass = classNames({
    modal: true,
    'modal--open': open,
  });

  const modalContent = classNames({
    modal__content: true,
    [`modal__content--width-${width}`]: width,
    [`modal__content--body-height-${bodyHeight}`]: bodyHeight,
  });

  const modalBodyClass = classNames({
    modal__body: true,
    'modal__content--no-padding': noPadding,
  });

  return createPortal(
    open ? (
      <div className={modalClass}>
        <div className={modalContent}>
          {(title || (closeIcon && onClose)) && (
            <ModalHeader onClose={onClose} title={title} />
          )}

          <div className={modalBodyClass}>{children}</div>

          {footerData && <ModalFooter footerData={footerData} />}
        </div>

        <div className="modal__backdrop" onClick={onClose} />
      </div>
    ) : null,
    document.body
  );
};
