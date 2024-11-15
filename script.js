function calculateDiet() {
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const activityLevel = document.getElementById('activityLevel').value;
    const ageGroup = document.getElementById('ageGroup').value;
    const tamaño = document.getElementById('tamaño').value;

    // Calculate daily food percentage based on age
    let dailyFoodPercentage;

    // Using a combined condition
    if (ageGroup === 'Puppy') {
        if (tamaño === 'Pequeña') {
            dailyFoodPercentage = 0.03; // 3% for small puppies
        } else if (tamaño === 'Mediana') {
            dailyFoodPercentage = 0.045; // 4.5% for medium puppies
        } else if (tamaño === 'Grande') {
            dailyFoodPercentage = 0.06; // 6% for large puppies
        }
    } else if (ageGroup === 'Adult') {
        dailyFoodPercentage = 0.025; // 2.5% for adults
    } else if (ageGroup === 'Senior') {
        dailyFoodPercentage = 0.02; // 2% for seniors
    } else {
        // Handle unexpected ageGroup inputs
        console.error('Invalid age group');
        return;
    }

    // Adjust for activity level
    if (activityLevel === 'Low') {
        dailyFoodPercentage *= 0.9;
    } else if (activityLevel === 'High') {
        dailyFoodPercentage *= 1.1;
    }

    // Calculate total daily food amount
    const totalDailyFood = weight * dailyFoodPercentage;

    // Calculate component amounts
    const muscleMeat = totalDailyFood * 0.4;
    const edibleBone = totalDailyFood * 0.4;
    const liver = totalDailyFood * 0.1;
    const otherOrgan = totalDailyFood * 0.1;

    console.log(muscleMeat);

    // Display results
    document.getElementById('totalFood').textContent = totalDailyFood.toFixed(2);
    document.getElementById('muscleMeat').textContent = muscleMeat.toFixed(2);
    document.getElementById('edibleBone').textContent = edibleBone.toFixed(2);
    document.getElementById('liver').textContent = liver.toFixed(2);
    document.getElementById('otherOrgan').textContent = otherOrgan.toFixed(2);
}
