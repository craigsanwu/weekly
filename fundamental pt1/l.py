class Solution:
  def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
    n = len(jobDifficulty)
    if d > n:
      return -1

    # dp[i][k] := the minimum difficulty to schedule the first i jobs in k days
    dp = [[math.inf] * (d + 1) for _ in range(n + 1)]
    dp[0][0] = 0

    for i in range(1, n + 1):
      for k in range(1, d + 1):
        maxDifficulty = 0  # max(job[j + 1..i])
        for j in range(i - 1, k - 2, -1):  # 1-based
          maxDifficulty = max(maxDifficulty, jobDifficulty[j])  # 0-based
          dp[i][k] = min(dp[i][k], dp[j][k - 1] + maxDifficulty)

    return dp[n][d]


# two sum

    class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    numToIndex = {}

    for i, num in enumerate(nums):
      if target - num in numToIndex:
        return numToIndex[target - num], i
      numToIndex[num] = i


    #   218 the skyline problem

    class Solution:
  def getSkyline(self, buildings: List[List[int]]) -> List[List[int]]:
    n = len(buildings)
    if n == 0:
      return []
    if n == 1:
      left, right, height = buildings[0]
      return [[left, height], [right, 0]]

    left = self.getSkyline(buildings[:n // 2])
    right = self.getSkyline(buildings[n // 2:])
    return self._merge(left, right)

  def _merge(self, left: List[List[int]], right: List[List[int]]) -> List[List[int]]:
    ans = []
    i = 0  # left's index
    j = 0  # right's index
    leftY = 0
    rightY = 0

    while i < len(left) and j < len(right):
      # Choose the powith smaller x
      if left[i][0] < right[j][0]:
        leftY = left[i][1]  # Update the ongoing `leftY`.
        self._addPoint(ans, left[i][0], max(left[i][1], rightY))
        i += 1
      else:
        rightY = right[j][1]  # Update the ongoing `rightY`.
        self._addPoint(ans, right[j][0], max(right[j][1], leftY))
        j += 1

    while i < len(left):
      self._addPoint(ans, left[i][0], left[i][1])
      i += 1

    while j < len(right):
      self._addPoint(ans, right[j][0], right[j][1])
      j += 1

    return ans

  def _addPoint(self, ans: List[List[int]], x: int, y: int) -> None:
    if ans and ans[-1][0] == x:
      ans[-1][1] = y
      return
    if ans and ans[-1][1] == y:
      return
    ans.append([x, y])


    # 850

    class Solution:
  def rectangleArea(self, rectangles: List[List[int]]) -> int:
    events = []

    for x1, y1, x2, y2 in rectangles:
      events.append((x1, y1, y2, 's'))
      events.append((x2, y1, y2, 'e'))

    events.sort(key=lambda x: x[0])

    ans = 0
    prevX = 0
    yPairs = []

    def getHeight(yPairs: List[Tuple[int, int]]) -> int:
      height = 0
      prevY = 0

      for y1, y2 in yPairs:
        prevY = max(prevY, y1)
        if y2 > prevY:
          height += y2 - prevY
          prevY = y2

      return height

    for currX, y1, y2, type in events:
      if currX > prevX:
        width = currX - prevX
        ans += width * getHeight(yPairs)
        prevX = currX
      if type == 's':
        yPairs.append((y1, y2))
        yPairs.sort()
      else:  # type == 'e'
        yPairs.remove((y1, y2))

    return ans % (10**9 + 7)