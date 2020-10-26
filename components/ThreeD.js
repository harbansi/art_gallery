import React from 'react';
import {
    AppRegistry,
    View,
    asset,
    VrButton,
} from 'react-360';
import ArtGalleryModel from './ArtGalleryModel';
import Light from './Lights';
import Entity from 'Entity';
import PictureButtonObject from './PictureButtonObject';


export default class ThreeD extends React.Component {

    constructor() {
        super();
        this.state = {
            xCurPos: -10,
            zCurPos: 7,
            xTarPos: -10,
            zTarPos: 7,
            yCurPos: 55,
            yTarPos: 55,
        };
        this.Lerp = this.Lerp.bind(this);
    }

    componentDidMount() {
        this.Lerp();
    }

    Lerp() {
        if (Math.abs(this.state.xCurPos - this.state.xTarPos) > 0.3) {
            //  to match the X coordinates
            this.setState({
                xCurPos: this.state.xCurPos * (1 - 0.7) + this.state.xTarPos * 0.7
            });
            postMessage({ type: "newPosition", x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos });

        } else if (Math.abs(this.state.zCurPos - this.state.zTarPos) > 0.3) {
            //  to match the z coordinates
            this.setState({
                zCurPos: this.state.zCurPos * (1 - 0.7) + this.state.zTarPos * 0.7
            });
            postMessage({ type: "newPosition", x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos });

        } else if (Math.abs(this.state.yCurPos - this.state.xTarPos) > 0.3) {
            //  to match the z coordinates

            this.setState({
                yCurPos: this.state.yCurPos * (1 - 0.7) + this.state.yTarPos * 0.7
            });
            postMessage({ type: "newPosition", x: this.state.xCurPos, y: this.state.yCurPos, z: this.state.zCurPos });
        }
        requestAnimationFrame(this.Lerp);
    }
    render() {
        return (
            <View>

                {/* <PictureButtonObject x={94} y={-54.3} z={-45} pic="gallery/ae8da775f2db3a5545ece0d660590eec.jpg"/> */}
                {/* 1st track point */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -10;
                        this.state.zTarPos = 7;
                    }}>



                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [10, -68.2, -7] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 2nd trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -55;
                        this.state.zTarPos = 7;
                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [55, -68.2, -7] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 3rd trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -110;
                        this.state.zTarPos = 7;
                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [110, -68.2, -7] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 4th trackpoint */}
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -110;
                        this.state.zTarPos = 33;
                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [110, -68.2, -33] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 5th trackpoint */}
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -140;
                        this.state.zTarPos = 33;
                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [140, -68.2, -33] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 6th trackpoint */}
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -185;
                        this.state.zTarPos = 33;

                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [185, -68.2, -33] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>
                {/* 7th trackpoint */}
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -185;
                        this.state.zTarPos = 55;

                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [185, -68.2, -55] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 8th trackpoint */}
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -140;
                        this.state.zTarPos = 55;
                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [140, -68.2, -55] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 9th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -90;
                        this.state.zTarPos = 55;
                    }}>

                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [90, -68.2, -55] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 10th trackpoint */}
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -55;
                        this.state.zTarPos = 55;
                    }}>

                    <Entity
                        source={{
                            obj: asset('PictureButton.obj'),
                            mtl: asset('PictureButton.mtl'),
                        }}
                        lit={true}
                        style={{
                            position:'relative',
                            transform: [
                                { translate: [7, -54, -53] },
                                { scale: 2 },
                                { scaleY: 1.3}
                                
                            ]
                        }}
                        

                    />

<Entity
                        source={{
                            obj: asset('PictureButton.obj'),
                            mtl: asset('PictureButton.mtl'),
                        }}
                        lit={true}
                        style={{
                            position:'relative',
                            transform: [
                                { translate: [7, -54, -86] },
                                { scale: 2 },
                                { scaleY: 1.3}
                                
                            ]
                        }}

                    />
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [55, -68.2, -55] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 12th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -15;
                        this.state.zTarPos = 55;
                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [15, -68.2, -55] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 13th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -15;
                        this.state.zTarPos = 83;
                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [15, -68.2, -83] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 14th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -55;
                        this.state.zTarPos = 83;
                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [55, -68.2, -83] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 15th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -90;
                        this.state.zTarPos = 83;
                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [90, -68.2, -83] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>

                {/* 16th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -140;
                        this.state.zTarPos = 83;
                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [140, -68.2, -83] },
                                { scale: 1 }
                            ]
                        }}
                    />
                </VrButton>
                {/* 17th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -140;
                        this.state.zTarPos = 115;
                        this.state.yTarPos = 57;

                    }}>
                    <Entity
                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),


                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [140, -68.2, -115] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 18th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -90;
                        this.state.zTarPos = 115;
                        this.state.yTarPos = 63.2;

                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [90, -72, -115] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 19th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -15;
                        this.state.zTarPos = 115;
                        this.state.yTarPos = 68.2;

                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [15, -77.2, -115] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 20th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -15;
                        this.state.zTarPos = 140;
                        this.state.yTarPos = 68.2;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [15, -77.2, -140] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 21st trackpoint */}
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -90;
                        this.state.zTarPos = 143;
                        this.state.yTarPos = 68.3;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [90, -81.6, -143] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 22nd trackpoint */}
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -90;
                        this.state.zTarPos = 173;
                        this.state.yTarPos = 68.3;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [90, -81.6, -173] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 23rd trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -60;
                        this.state.zTarPos = 173;
                        this.state.yTarPos = 68.3;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [60, -81.6, -173] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 24th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -15;
                        this.state.zTarPos = 173;
                        this.state.yTarPos = 67.6;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [15, -81.6, -173] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 25th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -15;
                        this.state.zTarPos = 230;
                        this.state.yTarPos = 67.6;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [15, -81.6, -230] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 26th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -60;
                        this.state.zTarPos = 230;
                        this.state.yTarPos = 67.6;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [60, -81.6, -230] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>


                {/* 27th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -110;
                        this.state.zTarPos = 230;
                        this.state.yTarPos = 67.6;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [110, -81.6, -230] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 28th trackpoint */}


                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -110;
                        this.state.zTarPos = 200;
                        this.state.yTarPos = 67.6;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [110, -81.6, -200] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -110;
                        this.state.zTarPos = 173;
                        this.state.yTarPos = 67.6;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [110, -81.6, -173] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 29th trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -110;
                        this.state.zTarPos = 150;
                        this.state.yTarPos = 67.6;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [110, -81.6, -150] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>

                {/* 30 trackpoint */}

                <VrButton
                    onClick={() => {
                        this.state.xTarPos = -150;
                        this.state.zTarPos = 150;
                        this.state.yTarPos = 67.6;
                    }}>

                    <Entity

                        source={{
                            obj: asset('Marker.obj'),
                            mtl: asset('Marker.mtl'),

                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [150, -81.6, -150] },
                                { scale: 1 }
                            ]
                        }}
                    />

                </VrButton>










                <Light />
                <ArtGalleryModel />
            </View>
        );
    }
};