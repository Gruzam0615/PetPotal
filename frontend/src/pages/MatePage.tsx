// import React from 'react'

import { Link } from "react-router-dom";
import MateList from "../components/Mate/Main/MateList";

export default function MatePage() {
  return (
    <>
        <MateList />
      <Link to='/mate/write'>글쓰기</Link>
    </>
  )
}
