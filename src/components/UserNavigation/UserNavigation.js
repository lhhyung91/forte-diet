import React, { useState } from 'react';
import { StyledLi, StyledUl, StyledUserBarWrapper } from './UserNavigation.styled';
import Button from 'components/Button/Button';
import { palette } from 'styles';
import { Modal } from 'components/Modal/Modal';
import LoginDialog from 'containers/LogInContainer/LogInContainer';
import SignUpDialog from 'containers/SignUpContainer/SignUpContainer';

export default function UserNavigation({ isAuthed, onSignOut }) {
  const [dialogType, setDialogType] = useState(null);

  const onOpen = e => {
    setDialogType(e.target.id);
  };

  /* 다이얼로그 x버튼에 주면 댐 */
  const onClose = e => {
    setDialogType(null);
  };

  return (
    <StyledUserBarWrapper>
      {dialogType && (
        <Modal>
          {dialogType === 'LoginDialog' ? (
            <LoginDialog closeModal={onClose} />
          ) : (
            <SignUpDialog closeModal={onClose} />
          )}
        </Modal>
      )}
      <nav>
        <StyledUl>
          {!isAuthed ? (
            <>
              <StyledLi>
                <Button
                  id='LoginDialog'
                  onClick={onOpen}
                  $width='60'
                  $height='30'
                  $fontSize='1.2'
                  $backgroundColor='transparent'
                  $color={palette.themeDefaultWhite}
                  $hoverBackground={palette.themeHover}
                  $borderColor={palette.themeDefaultWhite}
                >
                  로그인
                </Button>
              </StyledLi>
              <StyledLi>
                <Button
                  id='SignUpDialog'
                  onClick={onOpen}
                  $width='60'
                  $height='30'
                  $fontSize='1.2'
                  $backgroundColor='transparent'
                  $color={palette.themeDefaultWhite}
                  $hoverBackground={palette.themeHover}
                  $borderColor={palette.themeDefaultWhite}
                >
                  회원가입
                </Button>
              </StyledLi>
            </>
          ) : (
            <>
              <StyledLi>
                <Button
                  id='signUpDialog'
                  onClick={onSignOut}
                  $width='60'
                  $height='30'
                  $fontSize='1.2'
                  $backgroundColor='transparent'
                  $color={palette.themeDefaultWhite}
                  $hoverBackground={palette.themeHover}
                  $borderColor={palette.themeDefaultWhite}
                >
                  로그아웃
                </Button>
              </StyledLi>
            </>
          )}
        </StyledUl>
      </nav>
    </StyledUserBarWrapper>
  );
}
