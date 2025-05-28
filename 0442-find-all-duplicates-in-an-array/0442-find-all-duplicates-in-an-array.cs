public class Solution {
    public IList<int> FindDuplicates(int[] nums) {

        Dictionary<int,int> freq = new Dictionary<int,int>();

        foreach(int num in nums){
            if(!freq.ContainsKey(num)){
                freq[num] = 1;
            }
            else{
                freq[num]++;
            }
        }

        List<int> result = freq
            .Where(n => n.Value > 1)
            .Select(n => n.Key)
            .ToList();
        
        
        return result;
    }
}