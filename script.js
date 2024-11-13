function calculateDiet() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const activityLevel = document.getElementById('activityLevel').value;
    const ageGroup = document.getElementById('ageGroup').value;
    const tamaño = document.getElementById('tamaño').value;


    // Calculate daily food percentage based on age
    let dailyFoodPercentage;
    switch(ageGroup, tamaño) {
      case ('Puppy' && 'Pequeña'):
        dailyFoodPercentage = 0.03; // 3% for puppies
        break;
        case ('Puppy' && 'Mediana'):
        dailyFoodPercentage = 0.045; // 3% for puppies
        break;
        case ('Puppy' && 'Grande'):
        dailyFoodPercentage = 0.06; // 3% for puppies
        break;
      case 'Adult':
        dailyFoodPercentage = 0.025; // 2.5% for adults
        break;
      case 'Senior':
        dailyFoodPercentage = 0.02; // 2% for seniors
        break;
    }

    // Adjust for activity level
    switch(activityLevel) {
      case 'Low':
        dailyFoodPercentage *= 0.9;
        break;
      case 'High':
        dailyFoodPercentage *= 1.1;
        break;
    }
  
    // Calculate total daily food amount
    const totalDailyFood = weight * dailyFoodPercentage;
  
    // Calculate component amounts
    const muscleMeat = totalDailyFood * 0.4;
    const edibleBone = totalDailyFood * 0.4;
    const liver = totalDailyFood * 0.1;
    const otherOrgan = totalDailyFood * 0.1;
  
    console.log(muscleMeat)

    // Display results
    document.getElementById('totalFood').textContent = totalDailyFood.toFixed(2);
    document.getElementById('muscleMeat').textContent = muscleMeat.toFixed(2);
    document.getElementById('edibleBone').textContent = edibleBone.toFixed(2);
    document.getElementById('liver').textContent = liver.toFixed(2);
    document.getElementById('otherOrgan').textContent = otherOrgan.toFixed(2);
  } 