import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {tagPropType, mapToCssModules} from './Shared/helper.js';
import CNavLink from './CNavLink';

//component - CoreUI / CNavItem

const CNavItem = props=>{

  const {
    tag: Tag,
    className,
    cssModule,
    custom,
    //
    innerRef,
    active,
    linkClassName,
    linkProps,
    ...attributes
  } = props;

  //render

  const classes = mapToCssModules(classNames(
    className,
    'nav-item',
    active ? 'active' : false
  ), cssModule);

  const linkClasses = mapToCssModules(classNames(
    linkClassName,
  ), cssModule);

  if (!custom){
    return (
      <Tag {...attributes} className={classes} ref={innerRef}>
        <CNavLink {...linkProps} className={linkClasses} />
      </Tag>
    );
  }

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );

}

CNavItem.propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  //
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  custom: PropTypes.bool,
  linkClassName: PropTypes.string,
  linkProps: PropTypes.object
};

CNavItem.defaultProps = {
  tag: 'li'
};

export default CNavItem;