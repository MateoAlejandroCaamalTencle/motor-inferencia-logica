contract(contract1).
contract(contract2).
contract(contract3).

late_payment(contract1).
late_payment(contract3).

high_risk(contract1).

vip_client(contract2).

penalty_applicable(X) :-
    contract(X),
    late_payment(X),
    high_risk(X).

needs_review(X) :-
    contract(X),
    late_payment(X).

special_attention(X) :-
    vip_client(X),
    late_payment(X).