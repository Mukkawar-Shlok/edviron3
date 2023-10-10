const School = require("../../../models/schoolModel");
const Transaction = require("../../../models/transactionModel");

// Fetch all schools and their transactions
module.exports.getAllDisbursement = async function (req, res) {
	const schools = await School.find({});
	const response = [];

	for (let school of schools) {
		const transactions = await Transaction.find({ school: school._id });
		response.push({
			school: school._id,
			transactions: transactions,
		});
	}
	res.status(200).json(response);
};

// Create a new disbursement transaction
module.exports.createDisbursement = async function (req, res) {
  try {
    const { school, amount, payment_mode } = req.body;
    const transaction = await Transaction.create({
      school,
      amount,
      payment_mode,
      status: "PENDING",
    });

    res.status(200).json(transaction);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch all transactions
module.exports.getAll = async function (req, res) {
  try {
    const transactions = await Transaction.find({});
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch a single transaction by ID
module.exports.getOne = async function (req, res) {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update the status of a transaction
module.exports.reconcile = async function (req, res) {
  try {
    const transaction = await Transaction.findById(req.params.id);
    const { status } = req.body;
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    if (transaction.status === 'PENDING') {
      transaction.status = status;
      await transaction.save();
      res.status(200).json(transaction);
    } else {
        if(transaction.status === 'SUCCESS'){
            res.status(400).json({ message: 'Transaction is already completed.' });
        }else{
            res.status(400).json({ message: 'Transaction is in FAILED state.' });
        }
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
