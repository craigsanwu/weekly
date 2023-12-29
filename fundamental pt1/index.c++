class Solution {
 public:
  bool isRectangleCover(vector<vector<int>>& rectangles) {
    int area = 0;
    int x1 = INT_MAX;
    int y1 = INT_MAX;
    int x2 = INT_MIN;
    int y2 = INT_MIN;
    unordered_set<string> corners;

    for (const vector<int>& r : rectangles) {
      area += (r[2] - r[0]) * (r[3] - r[1]);
      x1 = min(x1, r[0]);
      y1 = min(y1, r[1]);
      x2 = max(x2, r[2]);
      y2 = max(y2, r[3]);

      // the four points of the current rectangle
      const vector<string> points{to_string(r[0]) + " " + to_string(r[1]),
                                  to_string(r[0]) + " " + to_string(r[3]),
                                  to_string(r[2]) + " " + to_string(r[1]),
                                  to_string(r[2]) + " " + to_string(r[3])};
      for (const string& point : points)
        if (!corners.insert(point).second)
          corners.erase(point);
    }

    if (corners.size() != 4)
      return false;
    if (!corners.count(to_string(x1) + " " + to_string(y1)) ||
        !corners.count(to_string(x1) + " " + to_string(y2)) ||
        !corners.count(to_string(x2) + " " + to_string(y1)) ||
        !corners.count(to_string(x2) + " " + to_string(y2)))
      return false;

    return area == (x2 - x1) * (y2 - y1);
  }
};




struct T {
  int size;
  int right;
  T(int size, int right) : size(size), right(right) {}
};

class Solution {
 public:
  vector<int> minInterval(vector<vector<int>>& intervals,
                          vector<int>& queries) {
    vector<int> ans(queries.size(), -1);
    auto compare = [](const T& a, const T& b) { return a.size > b.size; };
    priority_queue<T, vector<T>, decltype(compare)> minHeap(compare);
    vector<vector<int>> qs;

    for (int i = 0; i < queries.size(); ++i)
      qs.push_back({queries[i], i});

    ranges::sort(intervals);
    ranges::sort(qs);

    int i = 0;  // intervals' index
    for (const vector<int>& q : qs) {
      while (i < intervals.size() && intervals[i][0] <= q[0]) {
        minHeap.emplace(intervals[i][1] - intervals[i][0] + 1, intervals[i][1]);
        ++i;
      }
      while (!minHeap.empty() && minHeap.top().right < q[0])
        minHeap.pop();
      if (!minHeap.empty())
        ans[q[1]] = minHeap.top().size;
    }

    return ans;
  }
};