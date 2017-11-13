new Vue({
    el: '#app',
    data: {
        health1: 100,
        health2: 100,
        running: false,
        won1: 0,
        won2: 0
    },
    methods: {
        startGame: function () {
            this.running = true;
        },
        attack: function () {

            this.health1 -= this.randomDamage(5, 10);
            this.health2 -= this.randomDamage(2, 10);
            this.running = this.check();

        },
        heal: function () {
            this.health1 += this.randomDamage(2, 6);
            this.health1 = Math.min(this.health1, 100);
        },
        randomDamage: function (min, max) {
            return Math.max(Math.floor(Math.random()*10+1)%max, min);
        },
        check: function () {
            if(this.health1<=0) {
                this.won2++;
                return this.gameOver("You Loose!!! Play again???");
            }
            if(this.health2<=0) {
                this.won1++;
                return this.gameOver("You Win!!! Play again???");
            }
            return true;
        },
        gameOver: function (msg) {
            if(confirm(msg)) {
                this.health1 = this.health2 = 100;
                return true;
            } else {
                this.health1 = this.health2 = 100;
                return false;
            }
        }
    }
});