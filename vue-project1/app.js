// Vue의 property를 사용하지 않고 HTML에도 호출되지 않고 JavaScript 코드 내에서만 사용하는 경우 일반 JavaScript 함수를 사용해도 괜찮다.
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function isHealth(health) {
  return health < 0 ? 0 : health;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      round: 0,
    };
  },
  // HTML 로직은 모두 computed로
  computed: {
    monsterHealthBar() {
      return { width: this.monsterHealth < 0 ? 0 : this.monsterHealth + '%' };
    },
    playerHealthBar() {
      return { width: this.playerHealth < 0 ? 0 : this.playerHealth + '%' };
    },
    specialAttackBtn() {
      return this.round % 3 !== 0;
    }
  },
  methods: {
    attackMonster() {
      // 세 번째 턴마다 specialAttack을 하기 위해 round 수를 알아야한다.
      this.round++;

      // 최소 ~ 최대 -> Math.floor(Math.random() * (최대 - 최소)) + 최소
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.monsterHealth = isHealth(this.monsterHealth);
      
      // Monster를 공격하면 Player도 반격당해야하기 때문에 attackPlayer method를 호출해준다.
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.playerHealth = isHealth(this.playerHealth);
    },
    specialAttackMonster() {
      this.round++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    }
  }
});

app.mount('#game');