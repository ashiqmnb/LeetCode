public class Solution {
    public int CountWords(string[] words1, string[] words2) {
        var res1 = new Dictionary<string, int>();
        var res2 = new Dictionary<string, int>();
        
        foreach(string s in words1){
            if(res1.ContainsKey(s)){
                res1[s]++;
            }
            else{
                res1[s] = 1;
            }
        }

        foreach(string s in words2){
            if(res2.ContainsKey(s)){
                res2[s]++;
            }
            else{
                res2[s] = 1;
            }
        }

        string large = res1.Count >= res1.Count ? "res1" : "res2";
        int result = 0;
        if(large == "res1"){
            foreach(KeyValuePair<string, int> kvp in res1){
                if(kvp.Value == 1 && res2.ContainsKey(kvp.Key) && res2[kvp.Key] == 1){
                    result++;
                }
            }
        }
        else{
            foreach(KeyValuePair<string, int> kvp in res2){
                if(kvp.Value == 1 && res1.ContainsKey(kvp.Key) && res1[kvp.Key] == 1){
                    result++;
                }
            }
        }

        return result;
    }
}