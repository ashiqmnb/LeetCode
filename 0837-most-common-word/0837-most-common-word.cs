public class Solution {
    public string MostCommonWord(string paragraph, string[] banned) {
        
        string cleaned = new string(paragraph
            .Select(c => char.IsLetter(c) ? char.ToLower(c) : ' ')
            .ToArray());

        string[] words = cleaned.Split(' ', StringSplitOptions.RemoveEmptyEntries);

        HashSet<string> bannedSet = new HashSet<string>(banned.Select(b => b.ToLower()));

        Dictionary<string, int> freq = new Dictionary<string, int>();
        foreach(var word in words){
            if(!banned.Contains(word)){
                if(!freq.ContainsKey(word)){
                    freq[word] = 0;
                }
                freq[word]++;
            }
        }

        return freq.OrderByDescending(p => p.Value).First().Key;
    }
}