import React from 'react'
import '@google/model-viewer';
import CardVewPromotion from '../../components/cardView/CardViewPromotion'
import { useState } from 'react';

export default function Promotion() {

    const [data, setData] = useState()

    function childData(data) {
        setData(data)
    }

    return (
        <div>
            <CardVewPromotion childData={childData}></CardVewPromotion>
        </div >

    )

}



