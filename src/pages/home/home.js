import React, { Component } from 'react'
import anime from 'animejs'

class Animated extends Component {
    componentDidMount() {
        var filesScanned = { count: 0, infected: 0 };
        var scanning = anime({
            targets: filesScanned,
            autoplay: false,
            count: 1000,
            infected: 8,
            easing: 'linear',
            round: 1,
            update: function () {
                var total = document.querySelector('.scan-count');
                total.innerHTML = filesScanned.count;

                var infected = document.querySelector('.infected-count');
                infected.innerHTML = filesScanned.infected;
            }
        });

        document.querySelector('.play-scan').onclick = scanning.restart;
    }
    render() {
        return (
            <main>
                <div id="anime-demo">
                    <h2>Total Files: 1000</h2>
                    <h2 class="scan-headline">Files Scanned: <span class="scan-count">0</span></h2>
                    <h2 class="infected-headline">Infected Files: <span class="infected-count">0</span></h2>
                </div>

                <div class="controls">
                    <button class="play-scan">Replay Scanning</button></div>
            </main>
        )
    }
}



export default Animated