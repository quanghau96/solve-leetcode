# def get_sum():
#   total_sum = 0
#   for i in range(10):
#     total_sum += i
  
#   return total_sum


# def get_sum_v2(n):
#   total_sum = 0
#   for i in range(n):
#     total_sum += i
  
#   return total_sum


# def getIndex():
#   arrays = [1, 2, 3]
#   return arrays[1]

# def getIndexV2():
#   arrays = [1, 2, 3]
#   return max(arrays)  

# print(getIndexV2())


def sum(nums):
  max_val = max(nums)
  fre_count = [0] * (max_val + 1)

  print('feecount', fre_count)
  for v in nums:
    fre_count[v] += 1

  ans = 0
  
  for idx, val in enumerate(fre_count):
    if(val != 1):
      continue
    ans += idx

  return ans

exc = sum([1, 2, 3])
print(exc)