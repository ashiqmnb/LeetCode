public class Solution {
    public int MaxNumberOfBalloons(string text) {
        string target = "balloon";
        var count = new Dictionary<char, int>();

        foreach (char c in text)
        {
            if (count.ContainsKey(c))
                count[c]++;
            else
                count[c] = 1;
        }

        int res = 0;

        while (true)
        {
            foreach (char c in target)
            {
                if (!count.ContainsKey(c) || count[c] < 1)
                {
                    return res;
                }
                else
                {
                    count[c]--;
                }
            }
            res++;
        }
    }
}