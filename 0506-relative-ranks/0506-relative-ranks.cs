public class Solution {
    public string[] FindRelativeRanks(int[] score) {
        int n = score.Length;
        string[] results = new string[n];

        var scoreWithIndex = new List<(int score, int index)>();
        for(int i = 0; i < n; i++){
            scoreWithIndex.Add((score[i], i));
        }

        scoreWithIndex.Sort((a, b) =>  b.score.CompareTo(a.score));

        for(int i = 0; i < n; i++){
            string rank;

            if(i == 0) rank = "Gold Medal";
            else if(i == 1) rank = "Silver Medal";
            else if(i == 2) rank = "Bronze Medal";
            else rank = (i + 1).ToString();

            results[scoreWithIndex[i].index] = rank;
        }

        return results;
    }
}