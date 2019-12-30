import React from 'react';
import { Divider, Popover, Position, PopoverInteractionKind, Icon } from '@blueprintjs/core';

const popOverContentMenuItem = (menuItems) => {
  // console.log(menuKey);
  return (
    <div className="main-menu-popover-content">
      {menuItems[0].map((mi) => {
        return (
          <div className="menu-item" key={mi.id}>
            <div className="menu-item-element">
              <span>{mi.name}</span>
            </div>
            <div className="bottom-border" />
          </div>
        );
      })
    }
    </div>
  );
};

export default (menuObj, showMenu, toggleMenu) => {
  const menuName = Object.keys(menuObj)[0];
  return (
    <div className="nav-menu" onMouseLeave={() => toggleMenu(null)} onMouseEnter={() => toggleMenu(menuName)}>
      <Popover
        className="popover"
        boundary="viewport"
        canEscapeKeyClose
        hasBackdrop={false}
        inheritDarkTheme
        minimal={false}
        transitionDuration={2000}
        modifiers={{
          arrow: { enabled: false },
          flip: { enabled: true },
          keepTogether: { enabled: true },
          preventOverflow: { enabled: true },
        }}
        sliderValue={5}
        usePortal
        content={popOverContentMenuItem(Object.values(menuObj), menuName, toggleMenu)}
        interactionKind={PopoverInteractionKind.HOVER}
        isOpen={showMenu === menuName}
        position={Position.BOTTOM_LEFT}
      >
        <div className="menu-item">
          <span>{Object.keys(menuObj)[0]}</span>
          <Icon icon="caret-down" iconSize={18} />
        </div>
      </Popover>
      {/* <Divider style={{ background: 'white', marginBottom: 0, marginLeft: 10, marginRight: 10 }} /> */}
    </div>
  );
};