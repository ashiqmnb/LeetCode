public class Solution {
    public string FrequencySort(string s) {
        var count = new Dictionary<char, int>();
        foreach(char c in s){
            if(count.ContainsKey(c))
                count[c]++;
            else
                count[c] = 1;
        }
        var ordered = count.OrderByDescending(x => x.Value);

        StringBuilder sb = new StringBuilder();
        foreach(KeyValuePair<char, int> kvp in ordered){
            sb.Append(new string(kvp.Key, kvp.Value));
        }
        return sb.ToString();
    }
}