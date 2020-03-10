import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import Dropdown from './Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

const Flashlight = () => {
    const [fontSize, setFontSize] = useState(46);
    const [flashSpeed, setFlashSpeed] = useState(150);
    const [itemsAmount, setItemsAmount] = useState(4);
    const [itemsRange, setItemsRange] = useState(9);
    const [currentValue, setCurrentValue] = useState('-');

    let itemsArray = [];

    const fontArr = [14, 16, 18, 20, 22, 24, 26, 46];
    const speedArr = [400, 300, 250, 200, 150, 100, 90, 80, 70, 60, 50];
    const amountArr = [6, 8, 10, 12, 14, 16];
    const itemsRangeArr = [9, 19, 29, 126];

    const generateNumbers = () =>
        Array.from({ length: itemsAmount }, () => undefined).reduce(
            acc =>
                acc.concat(
                    (window.newElement = Math.floor(Math.random() * itemsRange)) === acc[acc.length - 1]
                        ? (window.newElement + 1) % itemsRange
                        : window.newElement
                ),
            []
        );

    const showNewValue = el =>
        new Promise(resolve =>
            setTimeout(() => {
                resolve(setCurrentValue(el));
            }, flashSpeed)
        );

    const startCount = async () => {
        itemsArray = generateNumbers();
        console.log(itemsArray);

        for (const item of itemsArray) {
            await showNewValue(item);
        }

        showNewValue('-');
    };

    return (
        <div>
            <div className="d-flex mb-5">
                <Dropdown title="Font size" data={fontArr} value={fontSize} onSelect={setFontSize} />
                <Dropdown title="Speed" data={speedArr} value={flashSpeed} onSelect={setFlashSpeed} />
                <Dropdown title="Item amount" data={amountArr} value={itemsAmount} onSelect={setItemsAmount} />
                <Dropdown title="Item ramge" data={itemsRangeArr} value={itemsRange} onSelect={setItemsRange} />
            </div>
            <div style={{ fontSize }}>{currentValue}</div>

            <Button className="mt-5" onClick={startCount}>
                Start count
            </Button>
        </div>
    );
};

export default Flashlight;
