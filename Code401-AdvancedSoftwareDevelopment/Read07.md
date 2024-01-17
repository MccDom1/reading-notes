# Read: Class 07

### Why is it important to know about scope?

Understanding variable scope in Python is crucial for organizing code and preventing naming conflicts. Local variables are accessible only within the function they are defined, while global variables are accessible throughout the program. The global and nonlocal keywords are used to modify global and non-global variables, respectively.

Big O notation is a standardized way to express algorithm efficiency, indicating the upper bound of time or space complexity. It allows for the comparison of algorithms without diving into implementation details, guiding the choice of the most efficient algorithm for a given task.

Simulating dice rolls in Python involves using the random module to generate random integers between 1 and 6. Calculating the probability of a specific outcome, like rolling a 6, is done by running simulations over a large number of trials and counting occurrences. This understanding is essential for various applications, including game development and statistical analysis.

## Readings: Ten Thousand 2

### Reading Questions

1. Explain the concept of variable scope in Python and describe the difference between local and global scope. Provide an example illustrating the usage of both.

- Variable scope refers to the region of the program where a variable is recognized and can be accessed.
In Python, variables can have local or global scope.
Local Scope:

A variable defined inside a function has local scope.

It is only accessible within that function.

Example:

python
Copy code
def example_function():
    local_variable = "I am local"
    print(local_variable)

example_function()
# This will print "I am local"
Global Scope:

A variable defined outside any function or block has global scope.

It is accessible throughout the program.

Example:

python
Copy code
global_variable = "I am global"

def another_function():
    print(global_variable)

another_function()
# This will print "I am global"

2. How do the global and nonlocal keywords work in Python, and in what situations might you use them?

- Global Keyword:

The global keyword is used to indicate that a variable declared inside a function has global scope.

It allows modification of a global variable from within a function.

Example:

python
Copy code
global_variable = "I am global"

def modify_global():
    global global_variable
    global_variable = "Modified global"

modify_global()
print(global_variable)
# This will print "Modified global"
Nonlocal Keyword:

The nonlocal keyword is used to indicate that a variable refers to the nearest enclosing scope that is not global.

It allows modification of a variable from an outer (but non-global) scope within a nested function.

Example:

python
Copy code
def outer_function():
    outer_variable = "I am outer"

    def inner_function():
        nonlocal outer_variable
        outer_variable = "Modified outer"

    inner_function()
    print(outer_variable)

outer_function()
# This will print "Modified outer"

3. In your own words, describe the purpose and importance of Big O notation in the context of algorithm analysis.

- Purpose and Importance of Big O Notation:
Big O notation is used to describe the upper bound of the growth rate of an algorithm's time or space complexity.
It provides a standardized way to express the efficiency of algorithms.
Importance:
Allows comparison of algorithms without getting into implementation details.
Helps in identifying the scalability of algorithms as input sizes increase.
Guides in choosing the most efficient algorithm for a given task.

4. Based on the Rolling Dice Example, explain how you would simulate a dice roll using Python. Describe how you would use code to calculate the probability of rolling a specific number (e.g., the probability of rolling a 6) over a large number of trials.

- Simulating a Dice Roll:

Use the random module to generate a random integer between 1 and 6.

Example:

python
Copy code
import random

def simulate_dice_roll():
    return random.randint(1, 6)

result = simulate_dice_roll()
print("Dice roll result:", result)
Calculating Probability over Large Trials:

Run the simulation over a large number of trials and count the occurrences of the specific outcome.

Divide the count by the total number of trials to get the probability.

Example:

python
Copy code
def calculate_probability(target_number, num_trials):
    count = 0

    for _ in range(num_trials):
        if simulate_dice_roll() == target_number:
            count += 1

    probability = count / num_trials
    return probability

target_number = 6
num_trials = 100000
probability_of_six = calculate_probability(target_number, num_trials)

print(f"Probability of rolling a {target_number}: {probability_of_six}")
Adjust num_trials based on the desired level of accuracy in estimating the probability. A higher number of trials generally leads to more accurate results.