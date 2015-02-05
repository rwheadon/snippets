

# The Question:
#
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 less than 1000.
divider = "*" * 10
def sum_for_mod_3_or_5( limit )
  i = 1
  result = 0
  until i == limit do
  # result += (i % 3 == 0 || i % 5 == 0)? i : 0
    if( i % 3 == 0 || i % 5 == 0)
      # puts i
      result += i
    end
    i += 1
  end  
  result
end
puts divider
res = "long quick and dirty method that does\nmod 3 or 5 of positive numbers less than 10 = #{sum_for_mod_3_or_5( 10 )}"
puts res

# the above method worked in crunch time when I couldn't look up the syntax I wanted
# but this shorter one I like better and it's more to what the original problem requested.
def sum_for_mod_3_or_5_shorter( last_number )
  result = 0
  (0..last_number).each do |i|
  result += (i % 3 == 0 || i % 5 == 0)? i : 0
  end
  result
end
puts divider
ress = "shorter and more correct method that does\nmod 3 or 5 of positive numbers less than 10 = #{sum_for_mod_3_or_5_shorter( 9 )}"
puts ress
