contract(contract1).
contract(contract2).
contract(contract3).
contract(contract4).

late_payment(contract1).
late_payment(contract3).

high_risk(contract1).
high_risk(contract4).

vip_client(contract2).

active_contract(contract1).
active_contract(contract2).
active_contract(contract3).

fraud_history(contract4).

penalty_applicable(X) :-
    contract(X),
    late_payment(X),
    high_risk(X).

needs_review(X) :-
    contract(X),
    late_payment(X).

priority_client(X) :-
    vip_client(X),
    active_contract(X).

investigation_required(X) :-
    high_risk(X),
    fraud_history(X).

suspend_contract(X) :-
    investigation_required(X),
    late_payment(X).    