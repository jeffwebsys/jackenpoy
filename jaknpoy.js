new Vue({

		el: '#app',
		data: {
			gameIsRunning: false,
			rock: false,
			paper: false,
			scissor: false,
			start: false,
			playerLife: 100,
			enemyLife: 100,
			cpuTurn: '',
			result: '',
			score: '',
			gameOver: false,
			playerBar: '',
			enemyBar: '',
			
		},

		methods: {

			startGame: function(){
				this.gameIsRunning = true;
				this.start = true;
			},
			cRock: function(){
				this.rock = true;
				this.paper = false;
				this.scissor = false;

				var jnpRand;
				jnpRand = Math.floor(Math.random() * 3) + 1;
				if(this.playerLife < 50 ){
					
					this.playerBar = 'red';

				}
				if(this.playerLife == 0 || this.enemyLife == 0){

					
					if(this.playerLife > this.enemyLife){
						this.result = 'You are indeed a Legendary'
					}else{
						this.result = 'You are a Loser!'
					}
					this.gameOver = true;
				}else{
				if(jnpRand == 1){

					this.cpuTurn = 'cpuRock.png'
					this.result = 'Draw'
				}else if(jnpRand == 2){
					this.cpuTurn = 'cpuPaper.png'
					this.result = 'You Lose!'
					this.playerLife -= 10;
				}else if(jnpRand == 3){
					this.cpuTurn = 'cpuScissor.png'
					this.result = 'You Won!'
					this.enemyLife -= 10;
				}

			}
				


				
			},
			cPaper: function(){
				this.paper = true;
				this.rock = false;
				this.scissor = false;
				var jnpRand;
				jnpRand = Math.floor(Math.random() * 3) + 1;
				if(this.playerLife == 0 || this.enemyLife == 0){

					if(this.playerLife > this.enemyLife){
						this.result = 'You are a Prince!'
					}else{
						this.result = 'You are a Loser!'
					}
					this.gameOver = true;
				}else{
				if(jnpRand == 1){

					this.cpuTurn = 'cpuRock.png'
					this.result = 'You Won!'
					this.enemyLife -= 10;
				}else if(jnpRand == 2){
					this.cpuTurn = 'cpuPaper.png'
					this.result = 'Draw!'
				}else if(jnpRand == 3){
					this.cpuTurn = 'cpuScissor.png'
					this.result = 'You Lose!'
					this.playerLife -= 10;
				}
				}
			},
			cScissor: function(){
				this.scissor = true;
				this.paper = false;
				this.rock = false;
				var jnpRand;
				jnpRand = Math.floor(Math.random() * 3) + 1;
				if(this.playerLife == 0 || this.enemyLife == 0){

					if(this.playerLife > this.enemyLife){
						this.result = 'You are Knight'
					}else{
						this.result = 'You are a Loser!'
					}
					this.gameOver = true;
				}else{
				if(jnpRand == 1){

					this.cpuTurn = 'cpuRock.png'
					this.result = 'You Lose!'
					this.playerLife -= 10;
				}else if(jnpRand == 2){
					this.cpuTurn = 'cpuPaper.png'
					this.result = 'You Won!'
					this.enemyLife -= 10;
				}else if(jnpRand == 3){
					this.cpuTurn = 'cpuScissor.png'
					this.result = 'Draw!'
				}
				
				}
			},
			
		}


	});