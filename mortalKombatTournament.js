// This defines the Character class constructor which takes name, health, magic, and specialMove as parameters.
// It initializes various properties of a character such as name, health, magic, maxHealth, maxMagic, defeated, and specialMove.
class Character {
  constructor(name, health, magic, specialMove) {
    this.name = name;
    this.health = health;
    this.maxHealth = health;
    this.magic = magic;
    this.maxMagic = magic;
    this.defeated = false;
    this.specialMove = specialMove;
  }
  // Current status of the characters before every fight stating their name
  showStatus() {
    console.log(`${this.name} status:`);
    console.log(`Health: ${this.health}`);
    console.log(`Magic: ${this.magic}`);
    console.log("-------------------");
  }
  // This method attackRegular(defender) represents a regular attack performed by the character.
  // It calculates a random damage value between 8 and 12.
  // It displays an attack message and inflicts damage on the defender character by calling defender.receiveDamage(damage).
  attackRegular(defender) {
    const damage = Math.floor(Math.random() * (12 - 8 + 1) + 8);
    console.log(
      `${this.name} attacks ${defender.name} with a regular attack. Damage: ${damage} || Current ${defender.name} health: ${defender.health}`
    );
    defender.receiveDamage(damage);
  }
  //   This method attackSpecialMove(defender) represents a special move attack performed by the character.
  //   It checks if the character has enough magic to perform the special move by comparing this.magic with this.specialMove.magic.
  //   If there is enough magic, it displays a special move attack message, inflicts damage on the defender character, reduces the character's magic by the required amount, and displays the damage inflicted.
  //   If there is not enough magic, it displays a message indicating that the character doesn't have enough magic and performs a regular attack by calling this.attackRegular(defender).
  attackSpecialMove(defender) {
    if (this.magic >= this.specialMove.magic) {
      console.log(
        `${this.name} launches a special move against ${defender.name}.`
      );
      const damage = this.specialMove.damage;
      defender.receiveDamage(damage);
      this.magic -= this.specialMove.magic;
      console.log(
        `Damage: ${damage} || Curent ${defender.name} health: ${defender.health}`
      );
    } else {
      console.log(`${this.name} doesn't have enough magic for a special move.`);
      this.attackRegular(defender);
    }
  }
  //   This method receiveDamage(damage) is used to handle the character receiving damage.
  //   It reduces the character's health by the specified damage value.
  //   If the character's health goes below or equal to 0, it sets the health to 0 and marks the character as defeated by setting this.defeated to true.
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      this.health = 0;
      this.defeated = true;
    }
  }
  //   This method restoreHealth() restores the character's health to its maximum value (this.maxHealth).
  //   It displays a message indicating that the character's health has been restored.
  restoreHealth() {
    this.health = this.maxHealth;
    console.log(`${this.name} health restored to ${this.health}.`);
    console.log("-------------------");
  }
  //   This method restoreMagic() restores the character's magic to its maximum value (this.maxMagic).
  //   It displays a message indicating that the character's magic has been restored.
  restoreMagic() {
    const restoredMagic = Math.ceil(this.maxMagic * 0.5);
    this.magic = Math.min(this.magic + restoredMagic, this.maxMagic);
    console.log(`${this.name} magic restored to ${this.magic}.`);
    console.log("-------------------");
  }
}

class SpecialMove {
  constructor(name, damage, magic) {
    this.name = name;
    this.damage = damage;
    this.magic = magic;
  }
}

// Create characters
const characters = [
  new Character("Scorpion", 120, 80),
  new Character("Sub-Zero", 110, 90),
  new Character("Liu Kang", 115, 85),
  new Character("Kitana", 105, 95),
  new Character("Raiden", 125, 75),
  new Character("Mileena", 100, 100),
  new Character("Johnny Cage", 95, 105),
  new Character("Jade", 110, 90),
  new Character("Baraka", 115, 85),
  new Character("Shao Kahn", 120, 80),
  new Character("Sonya Blade", 105, 95),
  new Character("Kano", 100, 100),
  new Character("Goro", 95, 105),
  new Character("Cyrax", 110, 90),
  new Character("Sektor", 115, 85),
  new Character("Kung Lao", 120, 80),
];

// Create special moves
const specialMoves = [
  new SpecialMove("Spear", 35, 30),
  new SpecialMove("Ice Ball", 40, 25),
  new SpecialMove("Bicycle Kick", 30, 30),
  new SpecialMove("Fan Throw", 30, 25),
  new SpecialMove("Lightning Strike", 35, 30),
  new SpecialMove("Roll Attack", 40, 25),
  new SpecialMove("Shadow Kick", 30, 30),
  new SpecialMove("Boomerang Throw", 35, 30),
  new SpecialMove("Blade Spark", 40, 30),
  new SpecialMove("Hammer Smash", 30, 20),
  new SpecialMove("Energy Blast", 35, 25),
  new SpecialMove("Cannonball", 40, 30),
  new SpecialMove("Four Arms", 35, 30),
  new SpecialMove("Buzz Saw", 30, 25),
  new SpecialMove("Missile Strike", 35, 30),
  new SpecialMove("Hat Throw", 40, 25),
];

// Assign special moves to characters
characters.forEach((character, index) => {
  character.specialMove = specialMoves[index];
});

// Welcome message-greeting
console.log(`
mmmmmm       mmmmm   oooooooooo   rrrrrrrrrrr   ttttttttttt       aaaaaa          lllll
mmmmmm     mmmmm   oooooooooooo   rrrrrrrrrr   tt  ttt  tt        aaaaa           lll
mmmmmmm   mmmmmm   oooo    oooo   rrr    rrr    t  ttt  t        aaaaaaa          lll
mmmmmmmmmmmmmmmm   oooo    oooo   rrr   rrr        ttt          aaa   aaa         lll
mmm   mmmm   mmm   oooo    oooo   rrrrrrr          ttt         aaaa   aaaa        lll
mmm   mmmm   mmm   oooo    oooo   rrr  rrr         ttt        aaaaa   aaaaa       lll   l
mmm   mmmm   mmm   oooooooooooo   rrr   rrr        ttt       aaaaaaaaaaaaaaa      lll   ll
mmmmm mmmmmm mmmmm   oooooooooo   rrrr  rrrrr     ttttttt   aaaaaaa     aaaaaaa  llllllllll

kkkkk   kkkkk     oooooooooo   mmmmmmm       mmmmmmm   bbbbbbbbb        aaaaaaaa         ttttttttttt
kkk     kkk     oooooooooooo   mmmmmmm     mmmmmmm     bbbbbbbb         aaaaaaa         tt  ttt  tt
kkk    kkk      ooo      ooo   mmmmmmmm   mmmmmmmm     bbb  bbb        aaaaaaaaa         t  ttt  t
kkk   kkk       ooo      ooo   mmmmmmmmmmmmmmmmmmm     bbb  bbb       aaaa   aaaa           ttt
kkkkkkkk        ooo      ooo   mmm     mmmm    mmm     bbbbbbb       aaaa     aaaa          ttt
kkkkkkkkk       ooo      ooo   mmm     mmmm    mmm     bbbbbbbb     aaaaaaaaaaaaaaa         ttt
kkk    kkk      ooo      ooo   mmm     mmmm    mmm     bbb  bbb    aaaaaaaaaaaaaaaaa        ttt
kkk     kkk     oooooooooooo   mmm     mmmm    mmm     bbb  bbb   aaaaaaa     aaaaaaa       ttt
kkkkk   kkkkk     oooooooooo   mmmmm   mmmmmm  mmmmm   bbbbbbbbb  aaaaaaa       aaaaaaa    ttttttt
                       _..gggggppppp.._                       
                  _.gd$$$$$$$$$$$$$$$$$$bp._                  
               .g$$$$$$P^^""j$$b""""^^T$$$$$$p.               
            .g$$$P^T$$b    d$P T;       ""^^T$$$p.            
          .d$$P^"  :$; \`  :$;                "^T$$b.          
        .d$$P'      T$b.   T$b                  \`T$$b.        
       d$$P      .gg$$$$bpd$$$p.d$bpp.           \`T$$b       
      d$$P      d$$$$$$$$$$$$$$$$$$$$bp.           T$$b      
     d$$P      d$$$$$$$$$$$$$$$$$$$$$$$$$b.          T$$b     
    d$$P      d$$$$$$$$$$$$$$$$$$P^^T$$$$P            T$$b    
   d$$P    '-'T$$$$$$$$$$$$$$$$$$bggpd$$$$b.           T$$b   
  :$$$      .d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._.g.     $$$;  
  $$$;     d$$$$$$$$$$$$$$$$$$$$$$$P^"^T$$$$P^^T$$$;    :$$$  
 :$$$     :$$$$$$$$$$$$$$:$$$$$$$$$_    "^T$bpd$$$$,     $$$; 
 $$$;     :$$$$$$$$$$$$$$bT$$$$$P^^T$p.    \`T$$$$$$;     :$$$ 
:$$$      :$$$$$$$$$$$$$$P \`^^^'    "^T$p.    lb\`TP       $$$;
:$$$      $$$$$$$$$$$$$$$              \`T$$p._;$b         $$$;
$$$;      $$$$$$$$$$$$$$;                \`T$$$$:Tb        :$$$
$$$;      $$$$$$$$$$$$$$$                        Tb    _  :$$$
:$$$     d$$$$$$$$$$$$$$$.                        $b.__Tb $$$;
:$$$  .g$$$$$$$$$$$$$$$$$$$p...______...gp._      :$\`^^^' $$$;
 $$$;  \`^^'T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p.    Tb._, :$$$ 
 :$$$       T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b.   "^"  $$$; 
  $$$;       \`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;     $$$  
  :$$$        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;     $$$;  
   T$$b    _  :$$\`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;   d$$P   
    T$$b   T$g$$; :$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  d$$P    
     T$$b   \`^^'  :$$ "^T$$$$$$$$$$$$$$$$$$$$$$$$$$$ d$$P     
      T$$b        $P     T$$$$$$$$$$$$$$$$$$$$$$$$$;d$$P      
       T$$b.      '       $$$$$$$$$$$$$$$$$$$$$$$$$$$$P       
        \`T$$$p.   bug    d$$$$$$$$$$$$$$$$$$$$$$$$$$P'        
          \`T$$$$p..__..g$$$$$$$$$$$$$$$$$$$$$$$$$$P'          
            "^$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$^"            
               "^T$$$$$$$$$$$$$$$$$$$$$$$$$$P^"               
                   """^^^T$$$$$$$$$$P^^^"""

                   `);
console.log(
  `!!! Welcome to Mortal Kombat, our emperor's Shang Tsung's Tournament !!!`
);

// Function to simulate a battle between two characters
function battle(char1, char2) {
  console.log(`*** Battle: ${char1.name} vs ${char2.name} ***`);
  char1.showStatus();
  char2.showStatus();

  while (!char1.defeated && !char2.defeated) {
    // Char1 attacks Char2
    if (char1.magic >= char1.specialMove.magic) {
      char1.attackSpecialMove(char2);
    } else {
      char1.attackRegular(char2);
    }
    // Check if Char2 is defeated
    if (char2.defeated) {
      console.log(
        `*** ${char1.name} wins the battle against ${char2.name}! ***\n`
      );
      return char1;
    }
    // Char2 attacks Char1
    if (char2.magic >= char2.specialMove.magic) {
      char2.attackSpecialMove(char1);
    } else {
      char2.attackRegular(char1);
    }
    // Check if Char1 is defeated
    if (char1.defeated) {
      console.log(
        `\n*** ${char2.name} wins the battle against ${char1.name}! ***\n`
      );
      return char2;
    }
  }
}
// Randomly shuffle the characters for Round 1
function shuffleCharacters(characters) {
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  return characters;
}
// Simulate the Mortal Kombat tournament
const shuffledCharacters = shuffleCharacters(characters);
// Function to simulate a round of battles
function simulateRound(characters) {
  const winners = [];
  for (let i = 0; i < characters.length; i += 2) {
    const char1 = characters[i];
    const char2 = characters[i + 1];
    const winner = battle(char1, char2);
    winners.push(winner);
  }
  return winners;
}
// Function to simulate the tournament
function simulateTournament() {
  const rounds = [
    "Round 1, Elimination",
    "Quarterfinals",
    "Semifinals",
    "Final",
  ];
  let remainingCharacters = [...characters];
  for (let i = 0; i < rounds.length; i++) {
    console.log(`\n=== ${rounds[i]} ===\n`);
    const winners = simulateRound(remainingCharacters);
    if (winners.length === 1) {
      console.log(
        `\n
                       _..gggggppppp.._                       
                  _.gd$$$$$$$$$$$$$$$$$$bp._                  
               .g$$$$$$P^^""j$$b""""^^T$$$$$$p.               
            .g$$$P^T$$b    d$P T;       ""^^T$$$p.            
          .d$$P^"  :$; \`  :$;                "^T$$b.          
        .d$$P'      T$b.   T$b                  \`T$$b.        
       d$$P      .gg$$$$bpd$$$p.d$bpp.           \`T$$b       
      d$$P      d$$$$$$$$$$$$$$$$$$$$bp.           T$$b      
     d$$P      d$$$$$$$$$$$$$$$$$$$$$$$$$b.          T$$b     
    d$$P      d$$$$$$$$$$$$$$$$$$P^^T$$$$P            T$$b    
   d$$P    '-'T$$$$$$$$$$$$$$$$$$bggpd$$$$b.           T$$b   
  :$$$      .d$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p._.g.     $$$;  
  $$$;     d$$$$$$$$$$$$$$$$$$$$$$$P^"^T$$$$P^^T$$$;    :$$$  
 :$$$     :$$$$$$$$$$$$$$:$$$$$$$$$_    "^T$bpd$$$$,     $$$; 
 $$$;     :$$$$$$$$$$$$$$bT$$$$$P^^T$p.    \`T$$$$$$;     :$$$ 
:$$$      :$$$$$$$$$$$$$$P \`^^^'    "^T$p.    lb\`TP       $$$;
:$$$      $$$$$$$$$$$$$$$              \`T$$p._;$b         $$$;
$$$;      $$$$$$$$$$$$$$;                \`T$$$$:Tb        :$$$
$$$;      $$$$$$$$$$$$$$$                        Tb    _  :$$$
:$$$     d$$$$$$$$$$$$$$$.                        $b.__Tb $$$;
:$$$  .g$$$$$$$$$$$$$$$$$$$p...______...gp._      :$\`^^^' $$$;
 $$$;  \`^^'T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$p.    Tb._, :$$$ 
 :$$$       T$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$b.   "^"  $$$; 
  $$$;       \`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;     $$$  
  :$$$        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;     $$$;  
   T$$b    _  :$$\`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$;   d$$P   
    T$$b   T$g$$; :$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  d$$P    
     T$$b   \`^^'  :$$ "^T$$$$$$$$$$$$$$$$$$$$$$$$$$$ d$$P     
      T$$b        $P     T$$$$$$$$$$$$$$$$$$$$$$$$$;d$$P      
       T$$b.      '       $$$$$$$$$$$$$$$$$$$$$$$$$$$$P       
        \`T$$$p.   bug    d$$$$$$$$$$$$$$$$$$$$$$$$$$P'        
          \`T$$$$p..__..g$$$$$$$$$$$$$$$$$$$$$$$$$$P'          
            "^$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$^"            
               "^T$$$$$$$$$$$$$$$$$$$$$$$$$$P^"               
                   """^^^T$$$$$$$$$$P^^^"""
                   \n
        Mortal Kombat Tournament ends! The one and only survived real champion is ${winners[0].name}!\n`
      );
      break;
    }

    remainingCharacters = [...winners];
    console.log(`\n--- Winners advancing to the next round ---\n`);
    remainingCharacters.forEach((character, index) => {
      console.log(`Winner ${index + 1}: ${character.name}`);
    });
    console.log("\n");

    // Restore health and magic for the next round
    console.log(`Restoring health and magic for the next round...\n`);
    remainingCharacters.forEach((character) => {
      character.restoreHealth();
      character.restoreMagic();
    });
  }
}

simulateTournament();
