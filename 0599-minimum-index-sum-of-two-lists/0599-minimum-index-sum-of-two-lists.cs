public class Solution {
    public string[] FindRestaurant(string[] list1, string[] list2) {
        var count = new Dictionary<string, int>();
        
        foreach(string str1 in list1){
            foreach(string str2 in list2){
                if(str1 == str2){
                    int index = Array.IndexOf(list1, str1) + Array.IndexOf(list2, str2);
                    count[str1] = index;
                }
            }
        }

        List<string> result = new List<string>();
        
        int leastIndex = count.Min(x => x.Value);
        
        foreach(KeyValuePair<string, int> kvp in count){
            if(kvp.Value == leastIndex){
                result.Add(kvp.Key);
            }
        }

        return result.ToArray();
    }
}