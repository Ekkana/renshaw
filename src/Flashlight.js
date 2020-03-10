import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import Dropdown from './Dropdown';

import 'bootstrap/dist/css/bootstrap.min.css';

const Flashlight = () => {
    const [fontSize, setFontSize] = useState(20);
    const [flashSpeed, setFlashSpeed] = useState(300);
    const [itemsAmount, setItemsAmount] = useState(6);
    const [itemsRange, setItemsRange] = useState(9);
    const [currentNumber, setCurrentumber] = useState(9);

    let itemsArray = [];

    const fontArr = [14, 16, 18, 20, 22, 24, 26];
    const speedArr = [400, 300, 250, 200, 150, 100, 90, 80, 70, 60, 50];
    const amountArr = [6, 8, 10, 12, 14, 16];
    const itemsRangeArr = [9, 19, 29];

    const generateNumbers = () =>
        Array.from({ length: itemsAmount }, () => undefined).reduce(
            acc =>
                acc.concat(
                    (window.x = Math.floor(Math.random() * itemsRange)) === acc[acc.length - 1]
                        ? (window.x + 1) % itemsRange
                        : window.x
                ),
            []
        );

    const showNewNumber = el =>
        new Promise(resolve =>
            setTimeout(() => {
                resolve(setCurrentumber(el));
            }, flashSpeed)
        );

    const startCount = async () => {
        itemsArray = generateNumbers();
        console.log(itemsArray);

        for (const item of itemsArray) {
            await showNewNumber(item);
        }
    };

    return (
        <div>
            <div className="d-flex mb-5">
                <Dropdown title="Font size" data={fontArr} value={fontSize} onSelect={setFontSize} />
                <Dropdown title="Speed" data={speedArr} value={flashSpeed} onSelect={setFlashSpeed} />
                <Dropdown title="Item amount" data={amountArr} value={itemsAmount} onSelect={setItemsAmount} />
                <Dropdown title="Item ramge" data={itemsRangeArr} value={itemsRange} onSelect={setItemsRange} />
            </div>
            <div style={{ fontSize }}>{currentNumber}</div>

            <Button className="mt-5" onClick={startCount}>
                Start count
            </Button>
        </div>
    );
};

export default Flashlight;
