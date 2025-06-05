public class Solution {
    public IList<int> MajorityElement(int[] nums) {

        int n = nums.Length;
        Dictionary<int,int> freq = new Dictionary<int,int>();

        foreach(int num in nums){
            if(!freq.ContainsKey(num)){
                freq[num] = 1;
            }
            else{
                freq[num]++;
            }
        }

        int maxCount = freq.Max(f => f.Value);
        int threshold = n / 3;

        List<int> results = new List<int>();

        foreach(var f in freq){
            if(f.Value > threshold){
                results.Add(f.Key);
            }
        }

        if(results.Count() > 2){
            return new List<int>();
        }

        return results;
    }
}