function getInputArray() {
    const input = document.getElementById("arrayInput").value;
    // Split the input by commas and convert to numbers
    return input.split(',').map(num => Number(num.trim()));
}

function runBubbleSort() {
    const arr = getInputArray();
    const { sortedArr, passes, passDetails } = bubbleSort(arr);
    document.getElementById("bubbleResult").innerText = sortedArr.join(", ");
    document.getElementById("bubblePasses").innerText = passes;
    document.getElementById("bubblePassDetails").innerText = passDetails.join("\n");
}

function bubbleSort(arr) {
    let n = arr.length;
    let passes = 0; // Initialize pass counter
    let passDetails = []; // Store the state of the array after each pass

    for (let i = 0; i < n - 1; i++) {
        passes++; // Increment pass counter for each outer loop iteration
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        // Store the current state of the array after each pass
        passDetails.push(`Pass ${passes}: ${arr.join(", ")}`);
    }
    return { sortedArr: arr, passes, passDetails }; // Return sorted array, pass count, and details
}

function runInsertionSort() {
    const arr = getInputArray();
    const { sortedArr, passes, passDetails } = insertionSort(arr);
    document.getElementById("insertionResult").innerText = sortedArr.join(", ");
    document.getElementById("insertionPasses").innerText = passes;
    document.getElementById("insertionPassDetails").innerText = passDetails.join("\n");
}

function insertionSort(arr) {
    let passes = 0; // Initialize pass counter
    let passDetails = []; // Store the state of the array after each pass

    for (let i = 1; i < arr.length; i++) {
        passes++; // Increment pass counter for each outer loop iteration
        let key = arr[i];
        let j = i - 1;
        
        // Insert arr[i] into the sorted sequence arr[0...i-1]
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;

        // Store the current state of the array after each pass
        passDetails.push(`Pass ${passes}: ${arr.join(", ")}`);
    }
    return { sortedArr: arr, passes, passDetails }; // Return sorted array, pass count, and details
}

function runSelectionSort() {
    const arr = getInputArray();
    const { sortedArr, passes, passDetails } = selectionSort(arr);
    document.getElementById("selectionResult").innerText = sortedArr.join(", ");
    document.getElementById("selectionPasses").innerText = passes;
    document.getElementById("selectionPassDetails").innerText = passDetails.join("\n");
}

function selectionSort(arr) {
    let passes = 0; // Initialize pass counter
    let passDetails = []; // Store the state of the array after each pass

    for (let i = 0; i < arr.length - 1; i++) {
        passes++; // Increment pass counter for each outer loop iteration
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }

        // Store the current state of the array after each pass
        passDetails.push(`Pass ${passes}: ${arr.join(", ")}`);
    }
    return { sortedArr: arr, passes, passDetails }; // Return sorted array, pass count, and details
}
