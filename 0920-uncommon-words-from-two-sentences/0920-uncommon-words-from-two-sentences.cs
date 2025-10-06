public class Solution {
    public string[] UncommonFromSentences(string s1, string s2) {
        var words1 = s1.Split(' ');
        var words2 = s2.Split(' ');

        var count = new Dictionary<string, int>();

        foreach(var word in words1){
            if(count.ContainsKey(word)) count[word]++;
            else count[word] = 1;
        }

        foreach(var word in words2){
            if(count.ContainsKey(word)) count[word]++;
            else count[word] = 1;
        }

        var result = count.Where(kv => kv.Value == 1)
                          .Select(kv => kv.Key)
                          .ToArray();

        return result;
    }
}