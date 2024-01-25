import numpy as np 

def sigmoid(x):
  return 1/(1+np.exp(-x))

training_input = np.array([[0,0,1],
                            [1,1,1],
                            [1,0,1],
                            [0,1,1]])
  
training_output = np.array([[0],[1],[1],[0]])
np.random.seed(1)

weights = 2 * np.random.random((3,1))

print('initial weights: ')
print(weights)

for i in range(1):
   input_layer = training_input 
   outputs = sigmoid(np.dot(input_layer,weights))
print(outputs)