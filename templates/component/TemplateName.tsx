import React from 'react';
import { TemplateNameWrapperStyled } from './TemplateName.styled';
import { TemplateNameComponentProps } from './TemplateName.props';


const TemplateName = ({}: TemplateNameComponentProps): JSX.Element => {
  return (
    <TemplateNameWrapperStyled className='TemplateName' data-testid='TemplateName'>
      TemplateName Component
    </TemplateNameWrapperStyled>
  );
};

export default TemplateName;
