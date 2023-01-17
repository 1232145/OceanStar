import React from 'react'

const styleHeaderTitle = {
    height: "453px",
    width: "100%",
    border: "1px solid #707070",
    borderRight: '0',
    borderLeft: '0',
    textAlign: "center",
    fontSize: "20px",
}

function HeaderTitle({ image, title, style}) {
  return (
    <div style={style ? style : styleHeaderTitle}>
        {title}
    </div>
  )
}

export default HeaderTitle