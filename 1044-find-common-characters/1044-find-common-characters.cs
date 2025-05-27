public class Solution {
    public IList<string> CommonChars(string[] words) {
        int[] minFreq = new int[26];
        for (int i = 0; i < 26; i++) minFreq[i] = int.MaxValue;

        foreach (string word in words) {
            int[] charCount = new int[26];
            foreach (char c in word) {
                charCount[c - 'a']++;
            }

            for (int i = 0; i < 26; i++) {
                minFreq[i] = Math.Min(minFreq[i], charCount[i]);
            }
        }

        List<string> result = new List<string>();
        for (int i = 0; i < 26; i++) {
            for (int j = 0; j < minFreq[i]; j++) {
                result.Add(((char)(i + 'a')).ToString());
            }
        }

        return result;
    }
}
