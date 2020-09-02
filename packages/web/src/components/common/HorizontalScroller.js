/* eslint-disable react/no-string-refs */
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Card, Button } from '@blueprintjs/core';
// import { Scrollbars } from 'react-custom-scrollbars';
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// class HorizontalScrollbar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   scrollRight = () => {
//     // this.refs.scrollbars.scroll({left: this.refs.scrollbars.getScrollLeft() + 200, behavior: 'smooth' });
//     this.refs.scrollbars.view.scroll({
//       left: this.refs.scrollbars.getScrollLeft() + 150, behavior: 'smooth',
//     });
//   }

//   scrollLeft = () => {
//     this.refs.scrollbars.view.scroll({
//       left: this.refs.scrollbars.getScrollLeft() - 150, behavior: 'smooth',
//     });
//   }

//   render() {
//     const { header, data, showmore } = this.props;
//     return (
//       <div className="product-list">
//         <div className="scrollbar-content">
//           <div className="scrollbar-button-div">
//             <Button onClick={this.scrollLeft} className="scrollbar-button-left">
//               <MdKeyboardArrowLeft color="black" size={20} />
//             </Button>
//           </div>
//           <Scrollbars
//             autoHeight
//             ref="scrollbars"
//             autoHide
//             universal
//             autoHeightMax={500}
//           >
//             <div style={{ display: 'flex' }}>
//               {data}
//             </div>
//           </Scrollbars>
//           <div className="scrollbar-button-div">
//             <Button onClick={this.scrollRight} className="scrollbar-button-right">
//               <MdKeyboardArrowRight color="black" size={20} />
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default HorizontalScrollbar;
// HorizontalScrollbar.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.any).isRequired,
//   header: PropTypes.string.isRequired,
// };


// NEW CAROUSEL

import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

export default (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const { header, data, showmore } = props;

  return (
    <div>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={props.items}
        gutter={12}
        leftChevron={<button className="carousel_nav_left"><i class="fa fa-angle-left"></i></button>}
        rightChevron={<button className="carousel_nav_right"><i class="fa fa-angle-right"></i></button>}
        outsideChevron={false}
      // chevronWidth={chevronWidth}
      >
        {data}
      </ItemsCarousel>

    </div>
  );
};
