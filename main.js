 function appendCharacter(character) {
            var inputBox = document.getElementById('inputbox');
            if (inputBox.value === "0" && character !== '.') {
                inputBox.value = character;
            } else {
                inputBox.value += character;
            }
        }

        function clearDisplay() {
            document.getElementById('inputbox').value = "0";
        }

        function deleteLast() {
            var inputBox = document.getElementById('inputbox');
            inputBox.value = inputBox.value.slice(0, -1);
            if (inputBox.value === "") {
                inputBox.value = "0";
            }
        }

        function calculateResult() {
            var inputBox = document.getElementById('inputbox');
            try {
                inputBox.value = eval(inputBox.value.replace('%', '/100'));
            } catch (e) {
                inputBox.value = "Error";
            }
        }